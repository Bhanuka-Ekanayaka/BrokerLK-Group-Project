const db = require('../db');
//const nodemailer = require('nodemailer');

const getUsers = async () => {
  try {
    // Get a connection from the pool
    const connection = await db.getConnection();

    const sqlQuery = 'SELECT * FROM users';

    const [result, fields] = await connection.execute(sqlQuery);

    connection.release();

    return result;
  }catch(err){
    throw err;
  }
};

const GetuserID =async(id)=>{
    try{
    const connection = await db.getConnection();

    const sqlQuery = 'SELECT * FROM users WHERE ID = ?';

    const [result] = await connection.execute(sqlQuery,[id]);
    connection.release();

    return result;
  }catch(err){
    throw err;
  }
}

  const addUser = async (userData) => {
    try {
      const connection = await db.getConnection();
      const { Fullname, email, username, password, NIC, jobrole, contactno, address, city} = userData;
      const sqlQuery = 'INSERT INTO users (Email, Username, Password, JobRole, Status) VALUES ( ?, ?, ?, ?, 1)';
      const [result] = await connection.execute(sqlQuery, [ email, username, password, jobrole]);
      connection.release();
      return result.insertId;
    } catch (err) {
      throw err;
    }
  };

  const DeleteuserByID =async(id)=>{
    try{
    const connection = await db.getConnection();

    const sqlQuery = 'DELETE FROM users WHERE ID = ?';

    const [result] = await connection.execute(sqlQuery,[id]);
    connection.release();

    return result.affectedRows;
    }catch(err){
      throw err;
    }
  }

  const updateUser = async (id, newuserData) => {
    try {
      const connection = await db.getConnection();
  
      const { Fullname, email, username, password, NIC, jobrole, contactno, address, city } = newuserData;
      let sqlQuery = '';
      let values = [];
  
      if (password) {
        sqlQuery = 'UPDATE users SET  Email = ?, Username = ?, Password = ?, JobRole = ? WHERE ID = ?;';
        values = [ email, username, password, jobrole, id];
      } else {
        sqlQuery = 'UPDATE users SET  Email = ?, Username = ? JobRole = ? WHERE ID = ?;';
        values = [ email, username, jobrole, id];
      }
  
      const [result] = await connection.execute(sqlQuery, values);
      connection.release();
  
      return result.affectedRows;
    }catch(err){
      throw err;
    }
  };

  const updateProfile = async (id, newuserData) => {
    try {
      const connection = await db.getConnection();
      const {  email } = newuserData;
      let sqlQuery = 'UPDATE users SET  Email = ? WHERE ID = ?;';
      let values = [ email , id];
      await connection.execute(sqlQuery, values);
      connection.release();
    } catch(err) {
      throw err;
    }
  };

  const searchuser = async(term)=>{
    try{
      const connection = await db.getConnection();

    const sqlQuery = 'SELECT * FROM users WHERE Email LIKE ? OR Username LIKE ? ';

    const [result, fields] = await connection.execute(sqlQuery,[`%${term}%`, `%${term}%`]);
    connection.release();

    return result;
    
  }catch(err){
    throw err;
  }
  
  }

  const verifyPassword = async(userid) =>{

    try{
      const connection = await db.getConnection();
      const sqlQuery = 'Select Password from users WHERE id = ?';
      const [result] = await connection.execute( sqlQuery, [userid]);
      connection.release();
      return result;
      } catch(error) {
          throw new Error(`${error.message}`);
      }
  }

  const updatePassword = async(userid, newpassword) =>{
    try{
      const connection = await db.getConnection();
      const sqlQuery = 'UPDATE users set password=? WHERE id = ?';
      await connection.execute( sqlQuery, [newpassword, userid]);
      connection.release();
      } catch(error) {
          throw new Error(`${error.message}`);
      } 
  }

module.exports = { getUsers,GetuserID,addUser,DeleteuserByID,updateUser, updateProfile, searchuser, verifyPassword, updatePassword };