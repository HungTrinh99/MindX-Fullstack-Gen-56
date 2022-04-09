const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

let books = [
  {
    id: "7c9c9ac5-f450-4416-9c16-16d9e1edc8b8",
    name: "Tôi thấy hoa vàng trên cỏ xanh",
    price: 20000,
    author: "Nguyễn Nhật Ánh",
    reviews: [
      { rating: 5, content: "Sách rất hay" },
      { rating: 3, content: "Tác giả cho một cái nhìn mới" },
      { rating: 2, content: "Hay vãi" },
    ],
  },
  {
    id: "f13f7de0-3077-45a7-ae28-6cf4aeab33a8",
    name: "Em và Trịnh",
    price: 10000,
    author: "David Luiz",
    reviews: [{ rating: 4.5, content: "Sách rất hay" }],
  },
  {
    id: "9feb2486-e001-4d18-838b-758c5b79553b",
    name: "Trên đường băng",
    price: 5000,
    author: "Tony buổi sáng",
    reviews: [
      { rating: 3, content: "Tác giả cho một cái nhìn mới" },
      { rating: 2, content: "Hay vãi" },
    ],
  },
];

router.get("/", (req, res) => {
  const options = req.query;
  res.json(books);
});

router.get("/:id", (req, res) => {
  //   Input
  const { id } = req.params;
  const selectedBook = books.find((book) => book.id === id);

  //   Logic
  if (!selectedBook) {
    return res.json({
      data: null,
    });
  }

  //Output
  return res.json({
    data: selectedBook,
  });
});
router.post("/", (req, res) => {
  // input validators
  let newBook = req.body;
  const { name, price, author } = newBook;
  if (!name || !price || !author) {
    return res.json({
      msg: "Missing fields",
    });
  }

  newBook = {
    id: uuidv4(),
    ...newBook,
    reviews: [],
  };

  books.push(newBook);
  res.status(201).json({
    msg: "Add successfully",
  });
});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return res.json({
      msg: "Book is not exist",
    });
  }

  const updatedBooks = books.filter((book) => book.id !== id);
  books = updatedBooks;

  return res.json({
    msg: "Delete successfully",
  });
});

module.exports = router;
