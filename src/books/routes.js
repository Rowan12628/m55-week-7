const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");
const { addBook } = require("./controllers");
const { putBooks } = require("./controllers");
const { delBooks } = require("./controllers");

//getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks); //reference function, don't call

//addBook
bookRouter.post("/books/addBook", addBook);

//putBooks
bookRouter.put("/books/putBooks", putBooks);

//delBooks
bookRouter.delete("/books/delBooks", delBooks);

module.exports = bookRouter;
