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

app.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
