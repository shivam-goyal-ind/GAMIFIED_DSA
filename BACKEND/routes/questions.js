const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require('axios'); // For making API calls to Judge0
const dotenv = require("dotenv");
const User = require("../models/User"); // Adjust the path if necessary
const Question = require("../models/questionModel"); // Import the Question model
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware
const router = express.Router();

dotenv.config();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET;
const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions"; // Judge0 API URL
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY; // API Key from .env

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Validate that all fields are present
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password and save the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    // Optionally create and return a JWT token
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Signin Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // Validate that all fields are present
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Optionally create and return a JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: "Signin successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET a random question
router.get("/questions/random", async (req, res) => {
  try {
    // Get the total count of questions in the database
    const count = await Question.countDocuments();

    if (count === 0) {
      return res.status(404).json({ message: "No questions available" });
    }

    // Generate a random index between 0 and (count - 1)
    const randomIndex = Math.floor(Math.random() * count);

    // Fetch one question by skipping randomIndex questions
    const question = await Question.findOne().skip(randomIndex);

    // Ensure question is found and send the required fields
    if (question) {
      res.json({
        _id: question._id,
        statement: question.statement,     // Ensure the problem statement is returned
        difficulty: question.difficulty,   // Send the difficulty
        testCases: question.testCases,     // Include the test cases
      });
    } else {
      res.status(404).json({ message: "No question found" });
    }
  } catch (error) {
    console.error("Error fetching random question:", error);
    res.status(500).json({ message: "Error fetching question" });
  }
});


// Route to evaluate user's code submission with authentication
router.post('/questions/:id/submit', authMiddleware, async (req, res) => {
  const { code, language } = req.body; // User's code and programming language
  const { id } = req.params; // Question ID

  try {
    // Fetch the question from the database
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Loop through each test case to validate user's code
    const results = [];
    for (const testCase of question.testCases) {
      const { input, expectedOutput } = testCase;

      // Prepare the payload for Judge0 API
      const submissionData = {
        source_code: code,
        stdin: input,
        language_id: language, // Judge0 language ID (adjust based on the language used)
      };

      // Send code to Judge0 for execution
      const submissionResponse = await axios.post(JUDGE0_API_URL, submissionData, {
        headers: {
          'X-RapidAPI-Key': JUDGE0_API_KEY,
          'Content-Type': 'application/json',
        },
      });

      const { stdout, stderr } = submissionResponse.data;

      // If there's an error in execution, return the error
      if (stderr) {
        return res.status(400).json({ message: `Error: ${stderr}` });
      }

      // Compare output with expected output
      const isCorrect = stdout.trim() === expectedOutput.trim();
      results.push(isCorrect);
    }

    // If all test cases pass
    if (results.every(result => result)) {
      // Update user's score based on difficulty
      const scoreToAdd = question.difficulty === 'easy' ? 10 : question.difficulty === 'medium' ? 25 : 50;

      // Find user and update the score (using user info from JWT)
      const user = await User.findById(req.user.id); // Ensure the user ID is available in the request
      user.score += scoreToAdd;
      await user.save();

      return res.json({ message: 'Solution accepted', score: user.score });
    } else {
      return res.status(400).json({ message: 'Wrong answer' });
    }

  } catch (error) {
    console.error("Error evaluating code submission:", error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
