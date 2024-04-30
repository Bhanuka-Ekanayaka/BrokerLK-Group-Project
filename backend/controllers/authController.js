
const db = require("../db");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    const { password, ...inputs } = req.body;
    let connection;
    try {
        connection = await db.getConnection();
        await connection.beginTransaction();

        const hashedPassword = await bcrypt.hash(password, 10);

        // add registrationuser table data
        const sql1 = 'INSERT INTO usersregistrationtb(Password,Email) ' +
            'VALUES(?,?)';
        const result = await connection.query(sql1, [hashedPassword, inputs.email]);

        const userId = result[0].insertId;

        // add data to the user table
        const sql2 = 'INSERT INTO usertb(fname,lname,user_id) ' +
            'VALUES(?,?,?)';
        await connection.query(sql2, [inputs.fname, inputs.lname, userId]);

        await connection.commit();
        connection.release();
        res.status(200).json({ message: "user Successfully registered!", success: true });


    } catch (err) {
        console.log(err);
        await connection.rollback();
        res.status(500).json({ message: "user cannot registered!", success: false });
    }
}


const loginUser = async (req,res) =>{
    const {password,email} = req.body;
    console.log(password,email);
    try{
        const hashedPassword = await bcrypt.hash(password,10);

        const sql = 'SELECT * FROM usersregistrationtb '+
                    'WHERE Email=? and Password = ?';
        
        const user = await db.query(sql,[email,hashedPassword]);

        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(401).json({message:"User Cannot Found!"})
    }
}

module.exports = {registerUser,loginUser};