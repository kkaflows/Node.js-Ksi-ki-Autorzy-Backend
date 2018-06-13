const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = require('../models/author');

//create author Schema & model
const BookSchema = new Schema({
    title:{
      type: String,
      required:[true, 'field surname is required']
    },
    year:{
      type: Number,
      required:[true, 'field name is required']
    },
    genre:{
      type: String
    },
    authorId:{
      type: String
    }


});

const Book = mongoose.model('book',BookSchema);

module.exports = Book;
