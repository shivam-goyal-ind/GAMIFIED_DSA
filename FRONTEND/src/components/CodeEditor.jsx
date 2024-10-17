import { useRef, useState, useEffect } from "react";
import { Box, Flex, Text, VStack, Heading, Button, Divider } from "@chakra-ui/react"; // Ensure Button is imported from Chakra UI
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import axios from "axios";
import { LANGUAGE_IDS } from "../constants"; // Adjust the path if necessary

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");
  const [userName, setUserName] = useState("John Doe"); // Example user name
  const [score, setScore] = useState(0); // Example score
  const [question, setQuestion] = useState(null); // Store fetched question
  const [loading, setLoading] = useState(true); // Add loading state
  const [output, setOutput] = useState(null); // Store code output

  // Use environment variable for backend URL
  const backendUrl = process.env.API_BASE_URL || "http://localhost:5000";

  // Fetch a random question from the backend without the difficulty filter
  const fetchQuestion = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`${backendUrl}/api/questions/random`);
      console.log("Fetched question:", response.data); // Log the question data
      
      // Ensure question exists and has a valid _id
      if (response.data && response.data._id) {
        setQuestion(response.data); // Set the question if it's valid
      } else {
        // Handle the case where question or _id is missing
        console.error("Question data is missing _id");
        alert("The question couldn't be loaded properly. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching question:", error); // Log error
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  useEffect(() => {
    fetchQuestion(); // Fetch the first question when the component mounts
  }, []);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    const token = localStorage.getItem('token'); // Get the token from localStorage
    try {
      const response = await axios.post(
        `${backendUrl}/api/execute`,
        {
          language,
          sourceCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token here
          }
        }
      );
      setOutput(response.data);
    } catch (error) {
      console.error("Error executing code", error);
    }
  };

  const submitCode = async () => {
    if (loading) {
      alert("The question is still loading. Please try again later.");
      return;
    }
  
    if (!question || !question._id) {
      alert("Question or Question ID is undefined. Cannot submit code.");
      return;
    }
    const sourceCode = editorRef.current.getValue(); // Get the code from the editor
    const languageId = LANGUAGE_IDS[language]; // Get the Judge0 language ID based on selected language
    const questionId = question ? question._id : null; // Fallback to null if question is undefined
    const token = localStorage.getItem('token'); // Get the token from localStorage
    
    try {
      // Log to verify if question and questionId are defined
      if (!question || !questionId) {
        console.error("Question or Question ID is undefined. Cannot submit code.");
        alert("Question not loaded properly. Please try again.");
        return;
      }

      console.log('Submitting code for Question ID:', questionId); // Added log
      // Make the Axios POST request to the correct endpoint
      const response = await axios.post(
        `${backendUrl}/api/submit`,
        {
          questionId: questionId, // Use the fetched question's ID
          userCode: sourceCode, // Change to userCode to match the backend
          language: languageId, // Send the correct language ID to the backend
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token here
          }
        }
      );

      // Check if the response indicates all test cases passed
      if (response.data.success) {
        // Update the score based on the difficulty level
        const points =
          question.difficulty === "easy"
            ? 10
            : question.difficulty === "medium"
            ? 25
            : 50;
        setScore(score + points);
        alert("Congratulations! You solved the problem.");
        
        // Fetch the next question
        fetchQuestion(); // Fetch the next question after success
      } else {
        alert("Solution failed. You are disqualified from further questions.");
      }
    } catch (error) {
      // Log the error and show an alert with a message
      console.error("Error submitting code:", error.response?.data || error.message);
      alert("There was an error submitting your code. Please try again.");
    }
  };

  return (
    <Box p={5}>
      {/* Top section: User name and score */}
      <Flex justifyContent="space-between" alignItems="center" m={6}>
        <Box>
          <Text fontSize="3xl" fontWeight="bold">Player Name : {userName}</Text>
        </Box>
        <Box>
          <Text fontSize="3xl" fontWeight="bold">Current Score : {score}</Text>
        </Box>
      </Flex>

      {/* Main content area */}
      <Flex>
        {/* Left half: Problem details in card */}
        <Box w="50%" pr={4} pt={3}>
          <Box
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            boxShadow="lg"
          >
            <VStack align="start" spacing={4} h="70vh">
              <Box>
                <Heading size="md" padding="3">
                  Problem Difficulty : {question ? question.difficulty : "Loading..."}
                </Heading>
              </Box>
              <Divider />
              <Box>
                <Heading size="md" padding="3">Problem Statement :</Heading>
                <Text padding="3">
                  {question ? question.statement : "Loading..."}
                </Text>
              </Box>
              <Divider />
              <Box>
                <Heading size="md" padding="3">Example Test Cases</Heading>
                {question && question.testCases.length > 0 ? (
                  question.testCases.map((testCase, index) => (
                    <Box key={index}>
                      <Text padding="3">
                        Input : {testCase.input}
                      </Text>
                      <Text padding="3">
                        Expected Output : {testCase.expectedOutput}
                      </Text>
                    </Box>
                  ))
                ) : (
                  <Text>Loading test cases...</Text>
                )}
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* Right half: Code editor and output */}
        <Box w="50%" p={6} borderWidth="3px" borderRadius="lg" boxShadow="lg" mt={3}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{ minimap: { enabled: false } }}
            height="50vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
          <Button colorScheme="blue" mt={6} ml={300} onClick={submitCode}>
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CodeEditor;
