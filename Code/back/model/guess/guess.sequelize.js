const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Match = require('./match');

const Guess = sequelize.define('guess', {
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
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

Guess.belongsTo(Match, {
  foreignKey: {
    name: 'match_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
});

module.exports = Guess;