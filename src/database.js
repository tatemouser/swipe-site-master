// app.js

const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "shopping_site_db",
    connectionLimit: 10
});

// Function to retrieve all items from the database
function getAllItems(callback) {
    pool.query('SELECT * FROM items', (err, result, fields) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

// Function to retrieve a specific item with ID 4 from the database
function getItemById(id, callback) {
    pool.query('SELECT * FROM items WHERE id = ?', [id], (err, result, fields) => {
        if (err) {
            callback(err, null);
            return;
        }
        if (result.length === 0) {
            callback("Item not found", null);
            return;
        }
        callback(null, result[0]);
    });
}

// Call the getItemById function to retrieve the item with ID 4
getItemById(4, (err, item) => {
    if (err) {
        console.error("Error:", err);
        return;
    }
    console.log("Item with ID 4:", item);
});
