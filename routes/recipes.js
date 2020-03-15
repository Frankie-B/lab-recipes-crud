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

module.exports = app;
