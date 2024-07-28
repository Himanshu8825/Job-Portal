const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signupUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;

    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: 'All fields are required', success: false });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: 'User already exists', success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      message: 'User registered successfully',
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, role, password } = req.body;

    if (!email || !role || !password) {
      return res
        .status(400)
        .json({ message: 'All fields are required', success: false });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'User not found', success: false });
    }

    const isMatchedPAssword = await bcrypt.compare(password, user.password);

    if (!isMatchedPAssword) {
      return res
        .status(401)
        .json({ message: 'Invalid Password', success: false });
    }

    if (role !== user.role) {
      return res.status(400).json({
        message: `Acccount doesn't exist with ${role} role  `,
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: '1d',
    });

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie('token', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: 'strict',
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        success: true,
        user,
        token: token,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token');
    return res
      .status(200)
      .json({ message: 'User logged out successfully', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(',');
    }

    const userId = req.id;
    let user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: 'User not found', success: false });
    }

    //updating Profile
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    await user.save();

    return res
      .status(200)
      .json({ message: 'Profile updated successfully', success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

module.exports = { signupUser, loginUser, logoutUser, updateProfile };
