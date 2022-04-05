const express = require("express");
const PORT = 4000;
const app = express();

// Data
const products = [
  {
    name: "IPhone 12",
    price: 24000000,
  },
  {
    name: "IPhone 13",
    price: 28000000,
  },
  {
    name: "IPhone 11",
    price: 20000000,
  },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/products", (req, res) => {
  res.json({
    data: products,
  });
});

app.get("/html", (req, res) => {
  res.set("Content-Type", "text/html");
  let productsString = "";
  products.forEach((product) => {
    productsString += `<div style="padding: 40px; border: solid 1px #000000;">
            <img src="http://localhost:4000/images/iphone.jpg"  width="110" height="auto">
            <p>Name: ${product.name}</p>
            <p>Price: ${product.price}</p>
        </div>`;
  });

  const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta >
            <title>My first website</title>
        </head>
        <body>
            <h1 style="color: red;">My first website</h1>
            <h2>Author: <strong>Hung Trinh</strong>
            </h2>
            <div style="display: flex;">
                ${productsString}
            </div>
        </body>
        </html>
    `;
  res.send(html);
});

app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/**
 * HTTP Method
 *
 * GET, POST, DELETE, PATCH, PUT
 * 404 , 500
 *
 * RESRful API => HTTP (HTTP Method)
 * PUT
 *
 * View engine: Ejs, Handlebar, Pub, Nunjucks
 * 
 * /products/create
 * /products/delete
 */


