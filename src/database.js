const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shopping_site_db",
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database.');

    // Perform query inside the connection callback
    connection.query('SELECT * FROM items', (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return;
        }
        console.log('Query results:', results);

        // Transform query results into the desired format
        const newData = results.map(item => {
            return {
                name: item.name,
                url: item.url
            };
        });

        // Use the transformed data or pass it to other parts of your code
        console.log('New data:', newData);

        // Close the connection after the query has finished executing
        connection.end();
    });
});




// const { createPool } = require('mysql');

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "shopping_site_db",
//     connectionLimit: 10
// });

// // Function to retrieve all items from the database
// function getAllItems(callback) {
//     pool.query('SELECT * FROM items', (err, result, fields) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }
//         callback(null, result);
//     });
// }

// // Function to retrieve a specific item with ID 4 from the database
// function getItemById(id, callback) {
//     pool.query('SELECT * FROM items WHERE id = ?', [id], (err, result, fields) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }
//         if (result.length === 0) {
//             callback("Item not found", null);
//             return;
//         }
//         callback(null, result[0]);
//     });
// }

// // Call the getItemById function to retrieve the item with ID 4
// getItemById(4, (err, item) => {
//     if (err) {
//         console.error("Error:", err);
//         return;
//     }
//     console.log("Item with ID 4:", item);
// });
