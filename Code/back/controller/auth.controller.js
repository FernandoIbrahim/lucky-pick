const { login, register } = require('../service/auth.service');

const loginController = async (req, res) => {

  const { username, password } = req.body;

  try {

    const { token, user } = await login(username, password);
    return res.status(200).json({ token, user });

  } catch (error) {

    console.error('Login failed:', error.message);
    return res.status(401).json({ error: error.message });

  }

};

const registerController = async (req, res) => {

  const { username, email, password } = req.body;

  try {

    const { token, user } = await register(username, email, password);
    return res.status(201).json({ token, user });

  } catch (error) {

    console.error('Registration failed:', error.message);
    return res.status(400).json({ error: error.message });

  }
  
};

module.exports = {
  loginController,
  registerController
};