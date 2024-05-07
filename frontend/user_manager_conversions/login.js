// login.js

const express = require('express');
const bodyParser = require('body-parser');
const con = require('./connection');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html'); // Assuming login.html is your login page
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = '${username}' LIMIT 1`;
  con.query(query, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const user = result[0];
      if (user.password === password) {
        req.session.user_id = user.user_id;
        res.redirect('/index'); // Redirect to the homepage or dashboard
      } else {
        res.send('Invalid username or password!');
      }
    } else {
      res.send('Invalid username or password!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
