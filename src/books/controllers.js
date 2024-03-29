const Book = require("./model");

// POST - adds a book to the DB
const addBook = async (req, res) => {
    try {        
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });
        res.status(201).json({ message: `${book.title} was added`, book:book });
    } catch (error) {
        res.status(500).json({message: error.message, error:error })
    }
};

// GET - gets all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json({message: "all books", books: books});
    } catch (error) {
        res.status(500).json({message: error.message, error:error});        
    }
};

// DELETE - deletes a single book by title
const deleteBook = async (req, res) => {
    try {
        const book = await Book.deleteOne ({ title: request.body.title});
        response.send({ message: "Deleted", book: book });        
    } catch (error) {
        res.status(500).json({message: error.message, error:error});        
    }
};

// DELETE - deletes all books
const deleteAllBooks = async (req, res) => {
    try {
        const books = await Book.destroy();
        res.status(200).json({message: "all books deleted", books: books});
    } catch (error) {
        res.status(500).json({message: error.message, error:error});        
    }
};

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBook: deleteBook,
    deleteAllBooks: deleteAllBooks,
};