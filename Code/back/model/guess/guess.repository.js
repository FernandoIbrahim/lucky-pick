const Guess = require('./guess.sequelize');

const create = async (data) => {

  try {

    const guess = await Guess.create(data);

    return guess;

  } catch (error) {

    throw new Error(`Failed to create guess: ${error.message}`);

  }
  
};

const findGuessesByMatchId = async (matchId) => {

  try {

    const guesses = await Guess.findAll({ where: { matchId } });

    return guesses;

  } catch (error) {

    throw new Error(`Failed to fetch guesses: ${error.message}`);

  }

};


module.exports = {
  create,
  findGuessesByMatchId
};

