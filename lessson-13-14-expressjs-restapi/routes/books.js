const express = require("express");
const BookModel = require("../models/Book");
const router = express.Router();

// @route GET /books
// @desc Get all books
// @access Private
router.get("/", async (req, res) => {
  try {
    const books = await BookModel.find();

    res.json({
      data: books,
    });
  } catch (err) {}
});

// @route GET /books/:id
// @desc Get single book by id
// @desc Private
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findById(id);
    return res.json({
      data: book,
    });
  } catch (err) {
    console.error(err.message);
  }
});

// @route POST /books
// @desc Add new book
// @access Private
router.post("/", async (req, res) => {
  const { name, price, author } = req.body;
  if (!name || !price || !author) {
    return res.json({
      msg: "Missing fields",
    });
  }

  const newBook = new BookModel({
    name,
    price,
    author,
  });

  const book = await newBook.save();
  res.status(201).json({
    data: book,
    msg: "Add successfully",
  });
});

// @route PUT /books/:id
// @desc Update a book
// @access Private
router.put("/:id", async (req, res) => {
  const { price, author, name } = req.body;
  const { id } = req.params;
  try {
    const book = await BookModel.findById(id);
    if (!book) {
      return res.json({
        msg: "Book not found",
      });
    }

    const updatedContact = await BookModel.findByIdAndUpdate(
      id,
      {
        price,
        author,
        name,
      },
      { new: true }
    );

    return res.json({
      msg: "Update successfully",
      data: updatedContact,
    });
  } catch (err) {
    console.error(err.message);
  }
});

// @route DELETE /books/:id
// @desc Delete a book
// @access Private
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findById(id);
    if (!book) {
      return res.json({
        msg: "Book not found",
      });
    }

    await BookModel.findByIdAndRemove(id);
    res.json({
      msg: "Delete succesfully",
    });
  } catch (err) {
    console.error(err.message);
  }

  return res.json({
    msg: "Delete succesfully",
  });
});

module.exports = router;
