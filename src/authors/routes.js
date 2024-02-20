// Author Routes

const { Router } = require("express");
const authorRouter = Router();

const { addAuthor } = require("./controllers");

// POST - create an author

authorRouter.post("/authors/addAuthor", addAuthor);

module.exports = authorRouter;