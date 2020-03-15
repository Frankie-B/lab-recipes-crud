const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
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

const Recipe = mongoose.model('recipes', recipeSchema);
module.exports = Recipe;
