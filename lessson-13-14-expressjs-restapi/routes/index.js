const express = require("express");

const booksRouter = require("./books");
const categoriesRouter = require("./categories");

const router = express.Router();

router.use("/books", booksRouter);
router.use("/categories", categoriesRouter);

module.exports = router;

