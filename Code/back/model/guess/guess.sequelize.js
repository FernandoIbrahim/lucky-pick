  const { DataTypes } = require('sequelize');
  const sequelize = require('../../config/sequelize');
  const Match = require('../match/match.sequelize');

  const Guess = sequelize.define('Guess', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_correct',
    },
    tip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'match_id',
    }
  }, {
    tableName: 'guesses',
    underscored: true,
  });

module.exports = Guess;
