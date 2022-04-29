const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const authMdw = require("../middlewares/auth");
const router = express.Router();

/// api/v1/auth/
router.get("/", authMdw, async (req, res) => {
  const id = req.id;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({
        msg: "No authorization!",
      });
    }
    res.json({
      user,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Missing credentials");
  }
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid credentials",
      });
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(400).json({
        msg: "Invalid credentials",
      });
    }

    const JWT_SECRET = process.env.JWT_SECRET_KEY;
    const EXPIRY_TIME = +process.env.ACCESS_TOKEN_EXPRIRE_IN;
    //   Authorization
    const token = jwt.sign(
      {
        id: user.id,
      },
      JWT_SECRET,
      { expiresIn: EXPIRY_TIME } // second as default
    );

    res.json({
      token: token,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    if (!(email && password && fullname)) {
      throw new Error("Missing information");
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.json({
        msg: "Email is already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    user = new User({
      fullname,
      email,
      password: hashPassword,
    });

    await user.save();

    res.status(201).json({
      msg: "Create successflly",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
