const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { findByEmail, create, findByUsername } = require('../model/user/user.repository');

const JWT_SECRET = 'dti';

  async function login(username, password) {

    const currentUser = await findByUsername(username);

    if (!currentUser) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, currentUser.password);

    if (!isMatch) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign(
      { user_id: currentUser.id, email: currentUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return { token, currentUser };

  }

  async function register(username, email, password) {


      if (await findByEmail(email)) {
        throw new Error('Email already in use');
      }

      if(await findByUsername(username)){
          throw new Error('Username already in use');
      }
    
      const hashedPassword = await bcrypt.hash(password, 10);
    
      const newUser = await create({
        username,
        email,
        password: hashedPassword
      });
    
      const token = jwt.sign(
        { user_id: newUser.id, email: newUser.email },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
    
      return { token, user: newUser };

  }

  module.exports = {
    login,
    register
  };