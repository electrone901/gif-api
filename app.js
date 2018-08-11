const bodyParser = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers);


app.listen(PORT, function() {
  console.log('listening');
});
