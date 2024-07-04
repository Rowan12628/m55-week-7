const { Router } = require("express");
const bookRouter = Router();

// const Book = require("./model");

const { getAllBooks } = require("./controllers");
const { addBook } = require("./controllers");

//getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks); //reference function, don't call

//addBook
bookRouter.post("/books/addBook", addBook);

module.exports = bookRouter;
