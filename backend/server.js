const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import cors package

const app = express();
const port = 4000; // Choose any port you like

// Use cors middleware
app.use(cors());

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'shopping_site_db', // Your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Define a route to fetch data from the database
app.get('/items', (req, res) => {
  // Execute query to fetch data from the table
  const query = 'SELECT name, url FROM items'; // Modify this query based on your table structure
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal server error');
      return;
    }
    
    // Send the fetched data in the response
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
