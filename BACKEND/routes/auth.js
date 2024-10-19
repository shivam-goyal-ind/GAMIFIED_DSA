const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET; 
// Sign Up Route
// router.post(
//   '/signup',
//   [
//     check('username', 'Username is required').not().isEmpty(),
//     check('email', 'Please provide a valid email').isEmail(),
//     check('password', 'Password should be 6 or more characters').isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, email, password } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (user) {
//         return res.status(400).json({ msg: 'User already exists' });
//       }

//       user = new User({
//         username,
//         email,
//         password,
//       });

//       // Hash password before saving
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);

//       await user.save();

//       // Create and return JWT
//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// // Sign In Route
// router.post(
//   '/signin',
//   [
//     check('email', 'Please provide a valid email').isEmail(),
//     check('password', 'Password is required').exists(),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ msg: 'Invalid credentials' });
//       }

//       // Create and return JWT
//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

module.exports = router;
