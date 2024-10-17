const express = require("express");
const router = express.Router();
const axios = require("axios");
const Question = require("../models/questionModel");
const authMiddleware = require("../middleware/authMiddleware"); // Assuming you have JWT middleware
require("dotenv").config();

// submit.js (backend)
router.post("/submit", authMiddleware, async (req, res) => {
  const { questionId, userCode, language } = req.body;

  try {
    console.log("Received questionId:", questionId); // Log the questionId received

    // Find the question by ID
    const question = await Question.findById(questionId);
    if (!question) {
      console.error("Question not found for ID:", questionId); // Log the not-found ID
      return res.status(404).json({ error: "Question not found" });
    }

// Run test cases against the submitted code using Judge0 API
const testResults = await Promise.all(
  question.testCases.map(async (testCase) => {
    try {
      // Make initial submission
      const response = await axios.post(
        "https://judge029.p.rapidapi.com/submissions",
        {
          language_id: language,
          source_code: userCode,
          stdin: testCase.input,
        },
        {
          headers: {
            "x-rapidapi-host": "judge029.p.rapidapi.com",
            "x-rapidapi-key": process.env.JUDGE0_API_KEY,
          },
        }
      );

      let submissionToken = response.data.token;
      let outputResponse = null;

      // Poll for result until ready
      while (true) {
        outputResponse = await axios.get(
          `https://judge029.p.rapidapi.com/submissions/${submissionToken}`,
          {
            headers: {
              "x-rapidapi-host": "judge029.p.rapidapi.com",
              "x-rapidapi-key": process.env.JUDGE0_API_KEY,
            },
          }
        );

        if (outputResponse.data.status.id <= 2) {
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
        } else {
          break;
        }
      }

      // Log the entire Judge0 response for debugging
      console.log("Full Judge0 API Response:", outputResponse.data);

      // Check if the code execution was successful (status 3 means "Accepted")
      if (outputResponse.data.status.id === 3) {
        if (outputResponse.data.stdout) {
          console.log("Judge0 Output:", outputResponse.data.stdout);
          // If the output is JSON, compare the JSON stringified versions
          try {
            return (
              JSON.stringify(JSON.parse(outputResponse.data.stdout.trim())) ===
              JSON.stringify(JSON.parse(testCase.expectedOutput.trim()))
            );
          } catch (error) {
            // If the output is not valid JSON, fall back to simple string comparison
            return outputResponse.data.stdout.trim() === testCase.expectedOutput.trim();
          }
        } else {
          console.error("No output (stdout) received from Judge0 for submissionToken:", submissionToken);
          return false;
        }
      } else {
        // If there's an error, log stderr and compile_output for debugging
        if (outputResponse.data.stderr) {
          console.error("Code execution error (stderr):", outputResponse.data.stderr);
        }
        if (outputResponse.data.compile_output) {
          console.error("Compilation error:", outputResponse.data.compile_output);
        }
        console.error("Judge0 execution failed with status:", outputResponse.data.status.description);
        return false;
      }
    } catch (judge0Error) {
      console.error("Error calling Judge0 API:", judge0Error);
      return false;
    }
  })
);



    // Check if all test cases passed
const allPassed = testResults.every((result) => result);

if (allPassed) {
  // If all test cases passed, fetch the next random question
  try {
    // Use environment variable to fetch the next question URL dynamically
    const API_BASE_URL = process.env.API_BASE_URL; // Fallback to localhost if not set
    const nextQuestionResponse = await axios.get(`${API_BASE_URL}/api/questions/random`);

    // Return success response with next question
    res.json({
      success: true,
      message: "All test cases passed!",
      nextQuestion: nextQuestionResponse.data, // Send the next question
    });
  } catch (error) {
    console.error("Error fetching next question:", error);

    // Handle the error for fetching next question
    res.status(500).json({
      success: false,
      error: "Error fetching next question. Please try again later.",
    });
  }
} else {
  // If some test cases failed, inform the user
  res.json({ success: false, message: "Some test cases failed." });
}

  } catch (error) {
    console.error("Error checking solution:", error);
    res.status(500).json({ error: "Error checking solution" });
  }
});

module.exports = router;
