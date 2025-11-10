const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authControllers');
const { forgotPassword, resetPassword } = require('../controllers/authControllers');

// User Authentication Routes
router.post('/signup', signup);
router.post('/login', login);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


module.exports = router;
