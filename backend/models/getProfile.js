const db = require('../db');


const profileDeatails = async(username) =>{
    try{
        const sql = 'SELECT * '+
                    'FROM users '+
                    'INNER JOIN usertb ON users.ID = usertb.user_id '+
                    'WHERE users.ID = '+username;
        const result = await db.query(sql);

        return {success:true,message:'result is getting succesfully', result:result}

    }catch(err){
        console.log(err);
        return {success:false,message:'cannot feth the data form the table'+err.message}
    }
}


module.exports = {
    profileDeatails
}