require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");
const Book = require("./books/model");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

//post request
app.post("/books/addBook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

//put request
app.put("/books/putBooks", async (request, response) => {
  const updateBook = await Book.updateOne(
    { title: request.body.title },
    { $set: { author: request.body.author } }
  );

  const successResponse = {
    message: "success",
    updateBook: updateBook,
  };
  response.send(successResponse);
});

//del request
app.delete("/books/delBooks", async (request, response) => {
  const deleteBook = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
});

app.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
