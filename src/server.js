require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("db is working");
};

connection();

//book model --

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

//-- book model ends

app.get("/books/getAllBooks", async (request, response) => {
  const allBooks = await Book.find({});
  console.log(allBooks);
  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
});

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

app.put("/books/putBooks", (request, response) => {});

app.delete("/books/delBooks", (request, response) => {});

app.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
