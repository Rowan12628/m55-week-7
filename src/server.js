const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/books/getAllBooks", (request, response) => {});

app.post("/books/addBook", (request, response) => {});

app.put("/books/putBooks", (request, response) => {});

app.delete("/books/delBooks", (request, response) => {});

app.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
