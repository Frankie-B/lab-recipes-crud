const mongoose = require('mongoose');

const Recipe = mongoose.model('recipes', {
  title: String,
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
  },
  ingredients: Object,
  dishType: String,
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg_',
  },
  duration: Number,
  creator: String,
  created: Object,
});

module.exports = Recipe;
