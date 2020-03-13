const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path');

// set up handlebars

mongoose
  .connect('mongodb://localhost/recipes-dev-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(error => {
    console.log('Unexpected error connection failed! :', error);
  });

app.set('PORT', 3000);
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/recipes'));

app.listen(app.set('PORT', 3000), () => {
  console.log('Webserver is listening on:', app.get('PORT'));
});
