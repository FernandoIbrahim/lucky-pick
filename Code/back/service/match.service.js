const { createMatch, findCurrentMatch, updateMatch } = require('../model/match/match.repository');
const { randomInt } = require('crypto'); 

async function registerMatch(user) {

    if((await searchCurrentMatch(user))){

      throw Error('User already has a match open');

    }

    const correctNumber = randomInt(1, 100); 

    const match = await createMatch({
      user_id: user.id,
      startDate: new Date(),  
      endDate: null, 
      correctNumber: correctNumber, 
      totalPoints: 0, 
      isCompleted: false, 
    });

    return {

      id: match.id

    };


}

async function searchCurrentMatch(user) {

  const match = await findCurrentMatch(user.id);

  if (!match) {
    return null;
  }

  return {
    id: match.id,
    guesses: match.guesses  
  };

}


async function searchCurrentMatchCorrectResult(user) {

  const match = await findCurrentMatch(user.id);
  
  return match.correctNumber;

}

async function searchCurrentMatchId(user) {

  const match = await findCurrentMatch(user.id);

  if (!match) {
    return null;
  }

  return match.id;

}


async function finalizeCurrentMatch(user){

  const match = await findCurrentMatch(user.id);

  await updateMatch(match.id, {
    isCompleted: true
  });

}

module.exports = {
  registerMatch,
  searchCurrentMatch,
  searchCurrentMatchId,
  searchCurrentMatchCorrectResult,
  finalizeCurrentMatch
}



