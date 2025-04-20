const Guess = require('../guess/guess.sequelize');
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
        is_completed: false
      },
      include: [
        {
          model: Guess,
          as: 'guesses'
        }
      ],
      order: [[{ model: Guess, as: 'guesses' }, 'createdAt', 'DESC']]
    });

    return match;

  } catch (err) {

    throw new Error('Error in repository layer'+ err);

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

    throw error;

  }

}


module.exports = {
  createMatch,
  findCurrentMatch,
  updateMatch
};