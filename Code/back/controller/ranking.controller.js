const { fetchFastGuessersRanking } = require('../service/ranking.service');

const getFastGuessersRanking = async (req, res) => {

  try {

    const ranking = await fetchFastGuessersRanking();
    res.status(200).json(ranking);

  } catch (error) {

    console.error("Error fetching ranking:", error);
    res.status(500).json({ error: "Failed to fetch ranking" });

  }

};

module.exports = {
    getFastGuessersRanking
}