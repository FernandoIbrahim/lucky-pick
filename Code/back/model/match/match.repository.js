const Match = require('../match/match.sequelize');

async function createMatch(data) {

  try {

    const match = await Match.create(data);
    return match;

  } catch (error) {

    throw error;

  }

}


async function findCurrentMatch(userId) {
  try {
    
    const match = await Match.findOne({
      where: { 
        user_id: userId,
        isCompleted: false  
      }
    });

    return match;

  } catch (err) {

    throw new Error('Error in repository layer');

  }

}


async function updateMatch(id, data) {

  try {

    const match = await Match.findByPk(id);
    if (!match) {
      throw new Error('Match not found');
    }

    await match.update(data);
    return match;

  } catch (error) {

    console.error('Error updating match:', error);
    throw error;

  }
}


module.exports = {
  createMatch,
  findCurrentMatch,
  updateMatch
};