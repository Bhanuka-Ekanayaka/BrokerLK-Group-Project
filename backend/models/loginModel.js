const db = require('../db')

const loginUser = async(email) => {

  try{
  const connection = await db.getConnection();
  const query = "SELECT * FROM users where email = ? ";

  const [results, fields] = await connection.execute(query,[email]);
  connection.release();
    
    return results;
  
}catch(error){
  throw new Error(`Error fetching users: ${error.message}`);
}
}


const resetpassword = async(email, newpassword) =>{

  try{
    const connection = await db.getConnection();

    const sqlQuery = 'UPDATE users SET password = ?, Loginflag = 1 WHERE email = ?';

    const [result, fields] = await connection.execute(sqlQuery,[newpassword,email]);
    connection.release();
    
    return result.affectedRows;
    }catch(error){
        throw new Error(`Error fetching users: ${error.message}`);
    }

}

const updateloginflag = async(email)=>{
  try{
    const connection = await db.getConnection();

    const sqlQuery = 'UPDATE users SET Loginflag = Loginflag+1 WHERE Username = ?';

    const [result, fields] = await connection.execute(sqlQuery,[email]);
    connection.release();
    return result.affectedRows;
    }catch(error){
        throw new Error(`Error fetching users: ${error.message}`);
    }
}

module.exports = { loginUser,resetpassword,updateloginflag };