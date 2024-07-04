const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks } = require("./controllers");
const { addBook } = require("./controllers");

//getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks); //reference function, don't call

//addBook
bookRouter.post("/books/addBook", addBook);

//putBooks
bookRouter.put("/books/putBooks", async (request, response) => {
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

module.exports = bookRouter;
