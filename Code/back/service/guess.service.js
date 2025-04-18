const { create, findGuessesByMatchId } = require('../model/guess/guess.repository');
const {  searchCurrentMatchCorrectResult, searchCurrentMatchId, finalizeCurrentMatch} = require('./match.service');

async function registerGuessOnCurrentMatch(data, user) {

    const currentMatchId = await searchCurrentMatchId(user);
    const currentMatchResult = await searchCurrentMatchCorrectResult(user);
    const userGuessNumber = data.number;

    if(currentMatchId == null){
      throw Error("The user don't hava an open quiz");
    }

    if(currentMatchResult == userGuessNumber){
      console.log('end match')
      await finalizeCurrentMatch(user);
    }

    const guess = await create({
        answer: compareNumbers(currentMatchResult, userGuessNumber),
        isCorrect: (currentMatchResult == userGuessNumber),
        number: data.number,
        matchId: currentMatchId
    });

    return guess;

}

async function searchGuessesByMatchId(matchId) {
    
    const guesses = await findGuessesByMatchId(matchId);

    return guesses;

}

function compareNumbers(correctNumber, guessNumber) {
    if (guessNumber > correctNumber) {
      return "The guess number is bigger than the correct number.";
    } else if (guessNumber < correctNumber) {
      return "The guess number is smaller than the correct number.";
    } else {
      return "Congratulations! You guessed the correct number.";
    }
}

module.exports = {
    registerGuessOnCurrentMatch,
    searchGuessesByMatchId
};


