import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controller/authcontroller.js';

const router = express.Router();

// @route POST /api/register
router.post('/register', registerUser);

// @route POST /api/login
router.post('/login', loginUser);

// @route POST /api/logout
router.delete('/logout', logoutUser);

export default router;
