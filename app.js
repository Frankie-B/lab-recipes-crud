const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));

app.set('PORT', 3000);

mongoose
  .connect('mongodb://localhost/recipe-dev-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"` // i get this message back, so it  does connect. ITS OK NOW
    );
  })
  .catch(error => {
    console.log('Unexpected error connection failed! :', error);
  });

// set up handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

app.use('/', require('./routes/index'));
app.use('/', require('./routes/recipes'));

app.listen(app.get('PORT'), () => {
  console.log('listening on port', app.get('PORT'));
});
