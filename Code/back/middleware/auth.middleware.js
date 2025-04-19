const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const JWT_SECRET = 'dti'; 

const verifyPromise = promisify(jwt.verify);

async function authenticateJWT(req, res, next) {

  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const decoded = await verifyPromise(token, JWT_SECRET);

  // 3. Anexar Dados do Usuário
  req.user = {
    id: decoded.user_id,
    email: decoded.email,
    role: decoded.role // Adicione roles se necessário
  };


  next();

};


function extractToken(req) {
  const headerToken = req.header('Authorization')?.replace(/^Bearer\s+/i, '');
  const cookieToken = req.cookies?.access_token;
  
  return headerToken || cookieToken;
}

module.exports = authenticateJWT;


