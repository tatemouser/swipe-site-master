const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shopping_site_db'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = con;
