// enabling setting data types
const { DataTypes } = require("sequelize");

// importing connection made to db
const sequelize = require("../db/connection");

const Book = sequelize.define("Book", {
    title: {
        type:DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: "some author",
    }, 
    genre: {
        type: DataTypes.STRING,
        defaultValue: "some genre",
    }   
});

module.exports = Book;