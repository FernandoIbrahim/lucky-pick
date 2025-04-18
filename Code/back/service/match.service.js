const { createMatch, findCurrentMatch } = require('../model/match/match.repository');
const { randomInt } = require('crypto'); 

async function registerMatch(user) {

    if(isNaN(await searchCurrentMatch(user) )){

      throw Error('User already has a match open');

    }

    const correctNumber = randomInt(1, 101); 

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
  return match;

}


module.exports = {
  registerMatch,
  searchCurrentMatch
}



