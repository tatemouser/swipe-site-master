const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 300;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shopping_site_db",
});

app.get('/fetchDataFromMySQL', (req, res) => {
  connection.query('SELECT * FROM items', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Failed to fetch data from MySQL' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
