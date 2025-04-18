const { Match } = require('../model/match/match.sequelize'); 
const { registerMatch } = require('../service/match.service')

async function createController(req, res) {
  try {
    
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const match = await registerMatch(user);

    return res.status(201).json({
      message: 'Match created successfully',
      matchId: match.id,
    });
  } catch (error) {
    console.error('Error in match creation:', error);
    return res.status(500).json({ error: `Error creating match: ${error.message}` });
  }
  
}

module.exports = {
  createController,
};