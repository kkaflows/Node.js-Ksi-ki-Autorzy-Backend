const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create author Schema & model
const AuthorSchema = new Schema({
    surname:{
      type: String,
      required:[true, 'field surname is required']
    },
    name:{
      type: String,
      required:[true, 'field name is required']
    },
    nationality:{
      type: String
    }

});

const Author = mongoose.model('author',AuthorSchema);

module.exports = Author;
