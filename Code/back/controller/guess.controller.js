const { Guess } = require('../model/guess/guess.sequelize'); 
const { registerGuessOnCurrentMatch } = require('../service/guess.service')

async function createGuessController(req, res) {

  try {
    
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const guess = await registerGuessOnCurrentMatch(req.body, user);

    return res.status(201).json(guess);

  } catch (error) {

    console.error('Error in guess creation:', error);
    return res.status(500).json({ error: `Error creating guess: ${error.message}` });

  }
  
}

module.exports = {
    createGuessController
}