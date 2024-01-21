const db = require('../db');

const getReports = (req,res)=>{
    const sql='SELECT * FROM reporttb';
    db.query(sql,(err,data)=> {
      if(err) return res.json(err);
      return res.json(data);
    }
)}

module.exports = getReports;