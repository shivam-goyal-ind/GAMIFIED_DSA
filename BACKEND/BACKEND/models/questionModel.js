const mongoose = require("mongoose");

// Define the schema for test cases associated with a question
const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true }, // Ensure input is required
  expectedOutput: { type: String, required: true }, // Ensure expected output is required
});

// Define the schema for questions
const questionSchema = new mongoose.Schema({
  statement: { type: String, required: true }, // The problem statement of the question
  difficulty: { 
    type: String, 
    enum: ["easy", "medium", "hard"], // Enum for difficulty levels
    required: true 
  },
  testCases: [testCaseSchema], // Array of test cases
});

// Create the Question model
const Question = mongoose.model("Question", questionSchema);

// Export the Question model
module.exports = Question;
