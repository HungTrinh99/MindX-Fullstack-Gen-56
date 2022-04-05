const fs = require("fs");

// Hypertext transffer protocol
const http = require("http");

const myMath = require("./myMath");

// console.log("Sum:", myMath.sum(3, 4));
// console.log("Sub:", myMath.sub(10, 4));
// console.log("Variable greeting content:", myMath.greeting);

// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

const PORT = 443;
const server = http.createServer((req, res) => {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    if (!err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});

// MERN - MongoDB, ExpressJS, ReactJs , NodeJS
