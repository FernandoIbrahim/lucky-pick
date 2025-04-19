const express = require('express');
const { createController, getCurrentMatchController } = require('../controller/match.controller');
const { createGuessController } = require('../controller/guess.controller');
const  authenticateJWT  = require('../middleware/auth.middleware');

const router = express.Router();


router.post('/', authenticateJWT , createController);
router.get('/current', authenticateJWT , getCurrentMatchController);
router.post('/current/guesses', authenticateJWT , createGuessController);


module.exports = router;