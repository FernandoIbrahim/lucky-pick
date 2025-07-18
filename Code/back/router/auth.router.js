const express = require('express');
const router = express.Router();

const { loginController, registerController } = require('../controller/auth.controller');

// POST /auth/login
router.post('/login', loginController);

// POST /auth/register
router.post('/register', registerController);

module.exports = router;