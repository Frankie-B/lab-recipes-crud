const express = require('express');
const app = express();
const Recipe = require('../models/recipeModel');

app.get('/recipes', (req, res) => {
  Recipe.find({})
    .then(dataList => {
      res.render('recipes/list.hbs', { recipes: dataList });
    })
    .catch(err => console.log(err));
});

app.get('/recipes/:recipeId', (req, res) => {
  Recipe.findById(req.params.recipeId)
    .then(dataList => {
      res.render('recipes/singleRecipe', { recipe: dataList });
    })
    .catch(err => console.log(err));
});

app.get('/recipes/delete/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.recipeId)
    .then(recipe => {
      res.redirect('/recipe');
    })
    .catch(err => {
      consol.log('Error', err);
    });
});

app.get('/recipes/create', (req, res) => {
  res.render('createRecipe');
});

app.post('/recipes', (req, res) => {
  console.log(req.body);
  Recipe.create({
    title: req.body.title,
    dishType: req.body.dishType,
    duration: req.body.duration,
    creator: req.body.creator,
  }).then(recipes => {
    res.redirect('/recipes/');
  });
});

// app.post('/movie/create', (req, res) => {
//   console.log(req.body);
//   Movie.create({
//     title: req.body.title,
//     director: req.body.director,
//     year: req.body.year,
//     duration: req.body.duration,
//   })
//     .then(movie => {
//       res.redirect(`/movie/detail/${movie._id}`);
//     })
//     .catch(err => {
//       res.send('error');
//     });
//   // res.render("createMovie");
// });

module.exports = app;
