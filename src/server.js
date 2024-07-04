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
