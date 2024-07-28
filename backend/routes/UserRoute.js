const express = require('express');
const {
  signupUser,
  loginUser,
  updateProfile,
  logoutUser,
} = require('../controllers/userController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const userRouter = express.Router();

userRouter.post('/signup', signupUser);

userRouter.post('/login', loginUser);

userRouter.post('/profile/update', isAuthenticated, updateProfile);

userRouter.get('/logout', logoutUser);

module.exports = userRouter;
