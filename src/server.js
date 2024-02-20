require ("dotenv").config();
const express = require("express");


const bookRouter = require("./books/routes");
const Book = require ("./books/model"); 
const genreRouter = require("./genres/routes");
const Genre = require("./genres/model");
const authorRouter = require("./authors/routes");
const Author = require("./authors/model");

const port = process.env.PORT || 5001;

// Initialize Express
const app = express();
app.use(express.json());

app.use(genreRouter);
app.use(bookRouter);
app.use(authorRouter);

const syncTablesGenre = async () => {   
    // creating an association between Books and Genre
    Genre.hasOne(Book);
    Book.belongsTo(Genre);

    Genre.sync();    
    Book.sync();    
};

const syncTablesAuthor = async () => {   
    // creating an association between Books and Author
    Author.hasMany(Book);
    Book.belongsTo(Author);

    Author.sync();    
    Book.sync();    
};

app.get("/health", (req, res) => {   
    // add status code
    res.status(200).json({ message: "API is healthy"});
});    

app.listen(port, () => {
    // running syncTables function
    syncTablesGenre();
    syncTablesAuthor();
    console.log(`Server is listening on port ${port}`);
});

