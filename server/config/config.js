// use mysql if it works for you
const mysql = require('mysql2') // Import the mysql2 library to handle MySQL connections

// create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'huyy',
  password: 'newpassword',
  database: 'food_delivery',
  port: 3306,
  multipleStatements: true // Allow multiple statements in a single query
})

connection.connect()
connection.on('error', (err) => {
  console.error('Database connection error:', err)
})

// Export the connection for use in other modules
// This allows you to use the connection in your routes or other parts of your application
module.exports = {connection}