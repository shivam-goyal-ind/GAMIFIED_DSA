const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number, 
    default: 0 },
});

// Check if the model already exists to avoid overwriting
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
