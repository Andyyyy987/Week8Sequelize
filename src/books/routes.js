const { Router } = require("express");
const bookRouter = Router();

// add a book
const { addBook } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books

bookRouter.get("/books/getAllBooks", async)

// update book author

// delete a single book by title

// get a single book

module.exports = bookRouter;
