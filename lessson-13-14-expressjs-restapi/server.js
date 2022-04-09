const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const logger = require("./middlewares/logger");
const app = express();
const PORT = 3001;

// allow all user can request
app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  const html = `
        <h1 style="text-align: center; padding-top:200px;">Welcome to our API resouces</h1>
    `;
  res.contentType("text/html").send(html);
});

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
  http://localhost:3001/api/v1
    books:
      GET http://localhost:3001/api/v1/books/
      GET http://localhost:3001/api/v1/books/:id
      POST http://localhost:3001/api/v1/books/
      PUT http://localhost:3001/api/v1/books/:id
      DELETE http://localhost:3001/api/v1/books/:id



*/

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
