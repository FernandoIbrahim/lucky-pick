const { Match } = require('../model/match/match.sequelize'); 
const { registerMatch, searchCurrentMatch } = require('../service/match.service')

async function createController(req, res) {

  try {
    
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const match = await registerMatch(user);

    return res.status(201).json({
      message: 'Match created successfully',
      id: match.id,
    });

  } catch (error) {

    console.error('Error in match creation:', error);
    return res.status(500).json({ error: `Error creating match: ${error.message}` });

  }
  
}

async function getCurrentMatchController(req, res){

  try {
    
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const match = await searchCurrentMatch(user);
    return res.status(200).json(match);

  } catch (error) {

    console.error('Error in match search:', error);
    return res.status(500).json({ error: `Error searching match: ${error.message}` });

  }

}

module.exports = {
  createController,
  getCurrentMatchController
};