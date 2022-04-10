const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [
  {
    id: 1,
    username: "alice",
    password: "123456",
  },
  {
    id: 2,
    username: "bob",
    password: "654321",
  },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      msg: "field missing!",
    });
  }

  //   Authentication
  const user = users.find(
    (u) => u.password === password && u.username === username
  );

  if (!user) {
    return res.json({
      msg: "Username or password is not correct",
    });
  }

  //   Authorization
  const token = jwt.sign(
    {
      username: user.username,
      id: user.id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: +process.env.ACCESS_TOKEN_EXPRIRE_IN } // second as default
  );
  const refresherToken = "aaaa";
  return res.json({
    username: user.username,
    accessToken: token,
    refresherToken: refresherToken,
  });
});
router.post("/register", (req, res) => {});

module.exports = router;

// Nha phat hanh
// han su sung
