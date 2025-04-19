const { registerGuessOnCurrentMatch } = require('../service/guess.service');
const { searchCurrentMatch } = require('../service/match.service')

async function createGuessController(req, res) {

  try {
    
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    await registerGuessOnCurrentMatch(req.body, user);
    const currentMatch = await searchCurrentMatch(user);

    return res.status(201).json(currentMatch);

  } catch (error) {

    console.error('Error in guess creation:', error);
    return res.status(500).json({ error: `Error creating guess: ${error.message}` });

  }
  
}

module.exports = {
    createGuessController
}