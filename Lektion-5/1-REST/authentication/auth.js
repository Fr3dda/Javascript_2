const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' })
}

exports.verifyToken = (req, res, next) => {

  // Bearer <token>
  // Token blir skickad som Bearer <token> därför gör vi en split för att bara få token delen
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    next();
  } 
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Access restricted! Please Login!'
    })
  }

}