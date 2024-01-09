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