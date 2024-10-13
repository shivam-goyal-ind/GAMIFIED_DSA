import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Loader from './components/Loader';
import LocomotiveScroll from 'locomotive-scroll';
import { Box, Button } from "@chakra-ui/react";  // Import Chakra UI Button
import CodeEditor from "./components/CodeEditor";  // Import CodeEditor
import { getBackendData } from "./api"; // Import the API to connect to the backend
import API from "./api";
function App() {
  const [loading, setLoading] = useState(true);  // State to track if the page is still loading
  const [showEditor, setShowEditor] = useState(false);  // New state to toggle code editor
  const [message, setMessage] = useState("");  // State to hold message from backend

  // Simulate a delay to show the loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // Set loading to false after 3 seconds (or when the content is ready)
    }, 3000);  // You can adjust this timing to match the actual load time of your content

    // Fetch data from backend to test connection
    const fetchData = async () => {
      try {
        const response = await API.get('/test'); // Making the API call here
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      {loading ? (   
        <div>
          {/* Preloader */}
          <Loader />

          {/* Main content, hidden until loader finishes */}
          <div className="LandingPage hidden">
            {/* Add your landing page content here */}
            <h1 className="text-4xl font-bold text-center mt-10">Welcome to Future Developers</h1>
            <p className="text-center mt-5">Empowering innovators of tomorrow through the art of code.</p>
          </div>
        </div>
      ) : showEditor ? (
        /* When `showEditor` is true, render the CodeEditor with Chakra UI styles */
        <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
          {/* Add a button to toggle back to the main content */}
          <Button 
            colorScheme="red" 
            mb={4} 
            onClick={() => setShowEditor(false)}  // Toggle back to main content
          >
            Back to Main Site
          </Button>
          <CodeEditor />
        </Box>
      ) : (
        /* Default view when the loader completes and editor is not shown */
        <>
          {/* Display the backend message if it's available */}
          {/* <div>
            {message ? (
              <p className="text-center text-lg">Backend says: {message}</p>
            ) : (
              <p className="text-center text-lg">Loading backend message...</p>
            )}
          </div> */}

          {/* Landing Page */}
          <LandingPage />
        </>
      )}
    </div>
  );
}

export default App;
