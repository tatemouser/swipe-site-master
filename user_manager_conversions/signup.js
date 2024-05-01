// signup.js

const express = require('express');
const bodyParser = require('body-parser');
const con = require('./connection');
const { randomNum } = require('./functions');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html'); // Assuming signup.html is your signup page
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const user_id = randomNum(20);
  const query = `INSERT INTO users (user_id, username, password) VALUES ('${user_id}', '${username}', '${password}')`;
  con.query(query, (err) => {
    if (err) throw err;
    res.redirect('/login'); // Redirect to the login page after signup
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
