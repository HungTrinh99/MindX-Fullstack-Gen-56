const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3001;

// allow all user can request
app.use(cors());
app.use(express.json());

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

app.get("/", (req, res) => {
  const html = `
        <h1 style="text-align: center; padding-top:200px;">Welcome to our API resouces</h1>
    `;
  res.contentType("text/html").send(html);
});

app.get("/books", (req, res) => {
  const options = req.query;
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  //   Input
  const { id } = req.params;
  const selectedBook = books.find((book) => book.id === +id);

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

app.post("/books", (req, res) => {
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

app.delete("/books/:id", (req, res) => {
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

app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const updataBook = req.body;
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    return res.json({
      msg: "Book is not exist",
    });
  }

  books[bookIndex] = updataBook;
  return res.json({
    msg: "Update successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*

    Books:
        GET http://localhost:3001/books => [...] JSON data

        Get single book
            GET http://localhost:3001/books/1 (***)
            GET http://localhost:3001/getOneBooks/1
            GET http://localhost:3001/books/getOne/1
        
        Add new book to DB
            POST http://localhost:3001/books

        Delete the record from DB
             DELETE http://localhost:3001/books/1

    Request parameters /:id/:reviewId ...
    Request query  ?page=1&per_page=100
    Request body: POST, PUT, PATCH
    CRUD 

    CORS Error: The request has been blocked because of the CORS policy

    CRUD: 
        Creare (POST) 
        Read (GET single, GET all)
        Update (PUT, PATCH)
        Delete
 */
