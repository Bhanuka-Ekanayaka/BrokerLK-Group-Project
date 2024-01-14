const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({
  path : './.env'
})

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;


/* Purpose: The DB.js file is likely responsible for managing the connection to your MySQL database. 
It may include code for creating a connection pool, handling database queries, and closing connections.
Reason for Use: Separating database-related logic into its own file allows you to encapsulate the details of the database interaction. 
This makes it easier to manage database connections consistently across your application. 
It also helps with code maintainability and makes it simpler to switch to a different database system in the future. */