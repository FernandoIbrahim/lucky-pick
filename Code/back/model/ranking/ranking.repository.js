const sequelize = require('../../config/sequelize');
const { QueryTypes } = require ('sequelize');

const findFastGuessersRanking = async () => {
  const results = await sequelize.query(
    `
    SELECT m.id AS match_id, m.correct_number,
           COUNT(g.id) AS guesses_count, u.username
    FROM matches m
    LEFT JOIN guesses g ON m.id = g.match_id
    INNER JOIN users u ON m.user_id = u.id
    WHERE m.is_completed = 1
    GROUP BY m.id, u.username
    ORDER BY guesses_count ASC
    LIMIT 5;
    `,
    {
      type: QueryTypes.SELECT,
    }
  );

  return results;
};

module.exports = {
  findFastGuessersRanking
}