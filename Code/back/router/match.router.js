const express = require('express');
const { createController, getCurrentMatchController } = require('../controller/match.controller');
const { createGuessController } = require('../controller/guess.controller');
const { getFastGuessersRanking } = require('../controller/ranking.controller');
const  authenticateJWT  = require('../middleware/auth.middleware');

const router = express.Router();


router.post('/', authenticateJWT , createController);
router.get('/current', authenticateJWT , getCurrentMatchController);
router.post('/current/guesses', authenticateJWT , createGuessController);
router.get('/ranking', authenticateJWT , getFastGuessersRanking);



module.exports = router;