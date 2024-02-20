const Author = require("./model");

// addAuthor

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorname: req.body.authorname,
    });

    res.status(201).json({ message: `${author.title} was added`, author: author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
    addAuthor: addAuthor,    
  };