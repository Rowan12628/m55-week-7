const Book = require("./model");

const getAllBooks = async (request, response) => {
  const allBooks = await Book.find({});
  console.log(allBooks);
  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
};

module.exports = {
  getAllBooks: getAllBooks,
};
