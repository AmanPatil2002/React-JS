const jwt = require("jsonwebtoken");//Imports the jsonwebtoken library.

const SECRET_KEY = "mysecretkey";
//This key is used to:
  // Sign the token during login/registration.
  // Verify the token when accessing protected routes.

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;//When token is valid, decoded data is stored in req.user
    next();
  });
}


module.exports = authenticateToken;