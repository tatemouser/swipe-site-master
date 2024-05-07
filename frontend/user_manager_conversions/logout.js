// logout.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/login'); // Redirect to the login page after logout
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
