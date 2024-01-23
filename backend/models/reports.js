const db = require('../db');

const createReport = (name, email, reason, description)=>{
  return new Promise((resolve,reject)=>{
    const sql="";
    db.query(sql,[name,email,reason,description],(err,results)=>{
      if(err){
        reject(err);
        return;
      }
      resolve(results);
    });
  });

 }


module.exports = createReport;