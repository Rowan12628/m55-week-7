const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");

//getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks); //reference function, don't call

module.exports = bookRouter;
