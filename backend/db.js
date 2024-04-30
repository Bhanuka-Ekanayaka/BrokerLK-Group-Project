const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config({
  path : './.env'
})

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port:process.env.PORT_NO,
  connectTimeout:60000,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection()
  .then(connection => {
    console.log('Connected to the database!');
    connection.release();
  })
  .catch(error => {
    console.error('Error ocured while connecting to the database');
    console.log(error);
  });

module.exports = db;


/* Purpose: The DB.js file is likely responsible for managing the connection to your MySQL database. 
It may include code for creating a connection pool, handling database queries, and closing connections.
Reason for Use: Separating database-related logic into its own file allows you to encapsulate the details of the database interaction. 
This makes it easier to manage database connections consistently across your application. 
It also helps with code maintainability and makes it simpler to switch to a different database system in the future. */