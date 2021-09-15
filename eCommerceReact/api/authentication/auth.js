const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY


// Skapar en token som är giltig i 1 timme. 
exports.generateToken = user => {
  return jwt.sign({id: user._id}, secretKey, { expiresIn: '1h' })
}
// Verifierar användarens (user) token
exports.verifyToken = (req, res, next) => {
  
  try {
    // Token skickas som header. Gör en split vid mellanslag mellan bearer och 'token'. 
    const token = req.headers.authorization.split(" ")[1]
    req.userData = jwt.verify(token, secretKey)
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