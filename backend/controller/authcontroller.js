import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/authModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Register a new user
// @route   POST /api/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error('Email already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Generate token
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    token,
  });
});

// @desc    Login user
// @route   POST /api/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error('Invalid email or password');
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400);
    throw new Error('Invalid email or password');
  }

  // Generate token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({
    name: user.name,
    email: user.email,
    token,
  });
});

// @desc    Logout user
// @route   POST /api/logout
export const logoutUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    await User.findByIdAndDelete(id)
  res.json({ message: 'User logged out successfully' });
});
