const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');
const User = require('../user/user.sequelize');

const Match = sequelize.define('matches', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'start_date',
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'end_date',
  },
  correctNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'correct_number',
  },
  totalPoints: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'total_points',
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_completed',
  }
}, {
  underscored: true, // Aplica snake_case automaticamente nos relacionamentos (ex: user_id)
});

Match.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  onDelete: 'CASCADE',
});


module.exports = Match;