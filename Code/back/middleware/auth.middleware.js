const jwt = require('jsonwebtoken');
const JWT_SECRET = 'dti'; 



function authenticateJWT(req, res, next) {

  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token.' });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateJWT;