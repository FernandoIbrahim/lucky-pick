const User = require('./user.sequelize');

const create = async (data) => {

  try {
    
    const user = await User.create(data);
    return user;

  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }

};

const findById = async (id) => {

  try {

    return await User.findByPk(id);

  } catch (error) {

    throw error;

  }

};

const findByEmail = async (email) => {

  try {

    return await User.findOne({ where: { email } });

  } catch (error) {

    throw error;

  }

};

const findByUsername = async (username) => {
    try {

      return await User.findOne({ where: { username } });

    } catch (error) {

      throw new Error('Database error while finding user by username' + error);

    }
  };



module.exports = {
  create,
  findById,
  findByEmail,
  findByUsername
};