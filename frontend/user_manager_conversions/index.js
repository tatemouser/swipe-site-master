// index.js

const express = require('express');
const bodyParser = require('body-parser');
const con = require('./connection');
const { checkLogin } = require('./functions');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check if user is logged in
app.use((req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login'); // Redirect unauthenticated users to the login page
  } else {
    next(); // Proceed to the next middleware or route handler
  }
});

// Route for the index page
app.get('/index', (req, res) => {
  res.send('Welcome to the index page!'); // Modify to render your actual index page
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
