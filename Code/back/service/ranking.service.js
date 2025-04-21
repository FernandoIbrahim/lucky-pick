const { findFastGuessersRanking } = require('../model/ranking/ranking.repository');

const fetchFastGuessersRanking = async () => {

    return await findFastGuessersRanking();

};

module.exports = {
    fetchFastGuessersRanking
}