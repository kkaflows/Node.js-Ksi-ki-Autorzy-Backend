const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const Book =require('../models/book');

//get a list of authors from database
router.get('/authors', function(req,res,next){
  Author.find({}).then(function(authors){
    res.send(authors);
  });
});

//add new author to database
router.post('/authors', function(req,res,next){
  // var author = new Author(req.body);
  // author.save();
  Author.create(req.body).then(function(author){
    res.send(author);
  }).catch(next);

});

//update an author in database
router.put('/authors/:id', function(req,res,next){
  Author.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
    Author.findOne({_id: req.params.id}).then(function(author){
      res.send(author);
    });
  })
});

//delete author from database
router.delete('/authors/:id', function(req,res,next){
  Author.findByIdAndRemove({_id: req.params.id}).then(function(author){
    res.send(author);
  });
});


//get a list of authors from database
router.get('/books', function(req,res,next){
  Book.find({}).then(function(books){
    res.send(books);
  });
});

//add new author to database
router.post('/books', function(req,res,next){
  // var author = new Author(req.body);
  // author.save();
  Book.create(req.body).then(function(book){
    res.send(book);
  }).catch(next);

});

//update an author in database
router.put('/books/:id', function(req,res,next){
  Book.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
    Book.findOne({_id: req.params.id}).then(function(book){
      res.send(book);
    });
  })
});

//delete author from database
router.delete('/books/:id', function(req,res,next){
  Book.findByIdAndRemove({_id: req.params.id}).then(function(book){
    res.send(book);
  });
});


module.exports = router;
