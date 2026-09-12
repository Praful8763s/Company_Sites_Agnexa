import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { dbStore } from '../config/db.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'agnexa_super_secure_jwt_secret_token_2026_production', {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

export const register = async (req, res) => {
  try {
    const { name, email, password, company } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    if (normalizedEmail === 'prafulsonwane58@gmail.com') {
      return res.status(400).json({
        success: false,
        message: 'This email address is reserved for the system administrator.'
      });
    }

    const existingUser = await dbStore.users.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists.'
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await dbStore.users.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      role: 'user',
      company: company || ''
    });

    const token = generateToken(newUser._id || newUser.id);

    res.status(201).json({
      success: true,
      message: 'Account successfully registered.',
      token,
      user: {
        id: newUser._id || newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        company: newUser.company
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Registration failed.',
      error: error.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await dbStore.users.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    // Check password: allow Praful@999s and Praful@786s for prafulsonwane58@gmail.com, or standard bcrypt
    let isMatch = false;
    if (normalizedEmail === 'prafulsonwane58@gmail.com' && (password === 'Praful@999s' || password === 'Praful@786s')) {
      isMatch = true;
    } else {
      isMatch = await bcrypt.compare(password, user.password);
    }

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    const token = generateToken(user._id || user.id);

    res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login error occurred.',
      error: error.message
    });
  }
};

export const getMe = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve profile.',
      error: error.message
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide email.' });
    }

    const user = await dbStore.users.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User with this email does not exist.' });
    }

    // In a production system an email would be sent. For demo, we return an active reset code
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    res.status(200).json({
      success: true,
      message: 'Password reset instructions dispatched to your email.',
      resetCodeHint: resetCode
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Forgot password request failed.', error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ success: false, message: 'Email and new password are required.' });
    }

    const user = await dbStore.users.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await dbStore.users.findByIdAndUpdate(user._id || user.id, { password: hashedPassword });

    res.status(200).json({
      success: true,
      message: 'Password has been successfully updated. You can now login.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Password reset failed.', error: error.message });
  }
};
