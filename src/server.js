require ("dotenv").config();
const express = require("express");

// from books folder/model file
const Book = require ("./books/model");

// const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");
const Genre = require("./genres/model");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(genreRouter);
// app.use(bookRouter);

const syncTables = async () => {   
    // syncing the model to the table 
    Genre.hasOne(Book);
    Book.belongsTo(Genre);

    Genre.sync();
    // making connection between book model and books table in db
    Book.sync();    
};

app.get("/health", (req, res) => {   
    // add status code
    res.status(200).json({ message: "API is healthy"});
});    

app.listen(port, () => {
    // running syncTables function
    syncTables();
    console.log(`Server is listening on port ${port}`);
});

