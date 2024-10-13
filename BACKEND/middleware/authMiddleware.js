const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables
const JWT_SECRET = process.env.JWT_SECRET; // Ensure you have JWT_SECRET defined in your .env file

const authMiddleware = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.header("Authorization");
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or malformed" });
  }

  const token = authHeader.replace("Bearer ", ""); // Extract the token

  // Verify token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Add user payload to the request object
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
