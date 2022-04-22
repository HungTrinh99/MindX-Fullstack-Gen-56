const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  console.log("Token-", token);
  if (!token) {
    return res.status(401).send("User must loggin first");
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    req.user = decoded.user;
    next();
  });
};

module.exports = auth;
