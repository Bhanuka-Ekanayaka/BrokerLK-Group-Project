const db = require('../db');

const createUser = (email, hashedPassword, role) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO registrationtb (email, password, role) VALUES (?, ?, ?)',
      [email, hashedPassword, role],
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

const getUserByEmail = async (email) => {
  try {
    const connection = await db.getConnection();
    const query = "SELECT * FROM registrationtb WHERE email = ? ";
    
    const [results, field] = await connection.execute(query, [email]);
    connection.release();

    return results;
}catch(error){
  throw(error)
}

} 

module.exports = { createUser, getUserByEmail };
