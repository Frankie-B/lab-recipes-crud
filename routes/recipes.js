const express = require('express');
const app = express();
const Recipe = require('../models/recipe');
// /recipes/recipes
app.get('/recipes', (req, res) => {
  Recipe.find()
    .then(recipesData => {
      res.render('recipes', { recipesHbs: recipesData });
    })
    .catch(err => {
      res.send('error');
    });
});

app.get('/recipes/list/:recipeId', (req, res) => {
  Recipe.findById(req.params.recipeId)
    .then(recipeData => {
      res.render('recipe', { recipeHbs: recipeData });
    })
    .catch(err => {
      res.send('error');
    });
});

app.get('/recipes/create', (req, res) => {
  res.render('createRecipe');
});

app.post('/recipes/create', (req, res) => {
  Recipe.create({
    title: req.body.title,
    cuisine: req.body.cuisine,
    duration: req.body.duration,
    creator: req.body.creator,
  })
    .then(recipe => {
      res.redirect(`/recipe/list/${recipe._id}`);
    })
    .catch(err => {
      res.send('error');
    });
});

app.get('/recipes/delete/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(movie => {
      res.redirect('/recipe');
    })
    .catch(err => {
      console.log('Err', err);
    });
});
app.get('/recipes/update/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipeData => {
      res.render('updateRecipe', { recipeHbs: recipeData });
    })
    .catch(err => {
      res.send('Error');
    });
});

app.post('/recipes/update/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    director: req.body.cuisine,
    year: req.body.year,
    duration: req.body.duration,
  })
    .then(recipe => {
      res.redirect(`/recipe/list/${recipe._id}`);
    })
    .catch(err => {
      res.send('err');
    });
});

module.exports = app;
