const db = require('../db');

const createUser = (fullName, email, nic, mobileNumber, username, hashedPassword) => {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO users (full_name, email, nic, mobile_number, username, password) VALUES (?, ?, ?, ?, ?, ?)',
        [fullName, email, nic, mobileNumber, username, hashedPassword],
        (err, results) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(results);
        }
      );
    });
  };
  
  const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results[0]);
      });
    });
  };

  
  module.exports = { createUser, getUserByUsername };


 /*  Purpose: The User.js file likely contains functions and methods related to user management, such as
   creating a new user in the database or retrieving user information.
  Reason for Use: Separating user-related logic into a dedicated file helps maintain a clean and modular codebase. 
  Functions in this file may interact with the database to perform CRUD (Create, Read, Update, Delete) operations related to user data. */