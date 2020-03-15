const express = require('express');
const app = express();
const Recipe = require('../models/recipeModel');

app.get('/recipes', (req, res) => {
  Recipe.find()
    .then(recipesData => {
      res.render('recipes', { recipesHbs: recipesData });
    })
    .catch(error => {
      res.send('error', error);
    });
});

// app.get('/recipes', (req, res) => {
//   Recipe.find()
//     .then(recipesData => {
//       res.render('recipes/list', { recipesHbs: recipesData });
//     })
//     .catch(err => {
//       res.render('error', err);
//     });
// });

module.exports = app;
