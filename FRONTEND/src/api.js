import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants"; // Updated import path

// Change this to the local server URL for your backend
const API = axios.create({
  baseURL: "https://gamified-dsa-backend.vercel.app/api", // Base URL for your API
});

export default API;
// Function to execute code through the backend
export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    return { error: "Failed to execute code" }; // Handle API error gracefully
  }
};

// Function to test connection to the backend
export const getBackendData = async () => {
  try {
    const response = await API.get("/test"); // Corresponds to the /api/test endpoint in backend
    return response.data;
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    throw error; // Re-throw the error so it can be caught in the calling component
  }
};

// Authentication API for Sign-Up and Sign-In

// Function to sign up a new user
export const signUp = async (formData) => {
  try {
    const response = await API.post("/auth/signup", formData); // Sign-up route
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    return { error: "Failed to sign up" };
  }
};

// Function to sign in an existing user
export const signIn = async (formData) => {
  try {
    console.log("Signing in with data:", formData); // Log the request data

    const response = await API.post("/auth/signin", formData); // Sign-in route
    return response.data;
  } catch (error) {
    console.error("Error signing in:", error);

    // Enhanced error logging
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else {
      console.error("Error message:", error.message);
    }

    return { error: "Failed to sign in" };
  }
};
