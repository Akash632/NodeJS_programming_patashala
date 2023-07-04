const express = require('express');
const signUpController = require('../controllers/authController');

const authRoute = express.Router();


authRoute.post('/signIn',signUpController);

module.exports = authRoute;