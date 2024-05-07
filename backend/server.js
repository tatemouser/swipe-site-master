const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

const verifyJwt = (req, res, next) => {
    const token = req.headers["access-token"];
    if(!token) {
        return res.json("We need token please provide it for next time");
    } else {
        jwt.verify(token, "jwtSecretKey", (err, decoded) => {
            if(err) {
                return res.json("Not Authenticated");
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get('/checkauth', verifyJwt, (req, res) => {
    return res.json("Authenticated");
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            const id = data[0].id;
            //  TODO: SHOULD BE FILE IN REAL APPLICATION
            const token = jwt.sign({id}, "jwtSecretKey", {expiresIn: 300});
            return res.json({Login: true, token, data});
        } else {
            return res.json("Failed");
        }
    })
})

app.listen(8081, () => {
    console.log("listening");
})
















// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors'); // Import cors package

// const app = express();
// const port = 4000; // Choose any port you like

// // Use cors middleware
// app.use(cors());

// // MySQL database connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', // Your MySQL username
//   password: '', // Your MySQL password
//   database: 'shopping_site_db', // Your MySQL database name
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database.');
// });

// // Define a route to fetch data from the database
// app.get('/items', (req, res) => {
//   // Execute query to fetch data from the table
//   const query = 'SELECT name, url FROM items'; // Modify this query based on your table structure
  
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Internal server error');
//       return;
//     }
    
//     // Send the fetched data in the response
//     res.json(results);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
