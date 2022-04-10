const express = require("express");

const booksRouter = require("./books");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");
const authMdw = require("../middlewares/auth");

const router = express.Router();

router.use("/books", authMdw, booksRouter);
router.use("/categories", authMdw, categoriesRouter);
router.use("/auth", authRouter);

module.exports = router;
