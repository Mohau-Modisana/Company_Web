const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// add more middleware to allow for templating support
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// Setting up a server port
const PORT = process.env.PORT || 3017;
app.listen(PORT, function () {
    console.log(`App started on port ${PORT}`)
});
