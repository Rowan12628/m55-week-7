const Book = require("./model");

//getAllBooks
const getAllBooks = async (request, response) => {
  const allBooks = await Book.find({});
  console.log(allBooks);
  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
};

//addBook
const addBook = async (request, response) => {
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
};

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
};
