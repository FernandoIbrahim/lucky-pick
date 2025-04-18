const express = require('express');
const { createController } = require('../controller/match.controller');
const  authenticateJWT  = require('../middleware/auth.middleware');

const router = express.Router();


router.post('/', authenticateJWT , createController);


module.exports = router;