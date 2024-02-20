const { Router } = require("express");
const bookRouter = Router();

// add a book
const { addBook } = require("./controllers");
bookRouter.post("/books/addBook", addBook);

// get all books
const { getAllBooks } = require("./controllers");
bookRouter.get("/books/getAllBooks", getAllBooks);

// delete a single book by title
const { deleteBook } = require("./controllers");
bookRouter.delete("/books/deleteBook", deleteBook);

// delete all books
const { deleteAllBooks } = require("./controllers");
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
