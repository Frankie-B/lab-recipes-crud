const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hbs = require('hbs');

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));

//on the localhost here the db is called recipe-app-dev :)

mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
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
app.set('PORT', 3000);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // added
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/', require('./routes/recipes'));

app.listen(app.get('PORT'), () => {
  console.log('listening on port', app.get('PORT'));
});
