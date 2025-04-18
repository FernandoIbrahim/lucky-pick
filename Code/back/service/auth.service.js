const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { findByEmail, create, findByUsername } = require('../model/user/user.repository');

const JWT_SECRET = 'dti';

async function login(email, password) {
  const user = await findByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Incorrect password');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { token, user };

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
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
  
    return { token, user: newUser };

}

module.exports = {
  login,
  register
};