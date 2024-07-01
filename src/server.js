const express = require("express");

const app = express();

app.use(express.json());

const fakeData = [
  { id: 1, title: "book1", author: "author1", genre: "genre1" },
  { id: 2, title: "book2", author: "author2", genre: "genre2" },
  { id: 3, title: "book3", author: "author3", genre: "genre3" },
];

app.get("/books", (request, response) => {
  //   console.log(request.path, ":", typeof request.path);
  response.send("Hello from /books");
});

app.get("/books/getAllBooks", (request, response) => {
  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.post("/books/addBook", (request, response) => {
  console.log(request.body);
  fakeData.push(request.body);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
