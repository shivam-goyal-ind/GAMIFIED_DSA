const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const questionRoutes = require('./routes/questions');
const User = require('./models/User'); // Import User model here
const app = express();
const PORT = process.env.PORT || 5000;
const submitRouter = require("./routes/submit"); 


require("dotenv").config();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(cors({
  origin: ["https://gamified-dsa-frontend.vercel.app"], // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust methods as needed
  credentials: true // Optional, use if your frontend requires credentials
}));
app.use(express.json()); // Replacing body-parser with express.json()

app.use("/api", questionRoutes);
app.use("/api", submitRouter);

// MongoDB Connection
mongoose
  .connect("mongodb+srv://imgoyal2005:hellomongodb@cluster0.lgcnjwv.mongodb.net/gamified_dsa?retryWrites=true&w=majority&appName=Cluster0", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

  app.get('/api/test', (req, res) => {
    res.json({ message: 'CORS is configured!' });
});
// Root endpoint to check if backend is running
app.get("/", (req, res) => {
  res.json("Backend connected!"); // Custom message for the /api/test endpoint
});


// API to execute code using Piston
app.post("/api/execute", async (req, res) => {
  const { language, sourceCode } = req.body;

  try {
    const response = await axios.post("https://judge029.p.rapidapi.com/config_info/execute", {
      language: language,
      version: req.body.version,
      files: [
        {
          content: sourceCode,
        },
      ],
    });

    // Send the result from Piston back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error executing code:", error);
    res.status(500).json({ error: "Failed to execute code" });
  }
});

// Signup Route
app.post("/api/auth/signup", async (req, res) => {
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
app.post("/api/auth/signin", async (req, res) => {
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

// // Root endpoint to check if backend is running
// app.get("/", (req, res) => {
//   res.send("Backend is running"); // Custom message for root endpoint
// });
// Start the server

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
