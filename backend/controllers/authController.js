
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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
        const sql = 'SELECT * FROM usersregistrationtb '+
                    'WHERE Email=?';
        const user = await db.query(sql,[email]);

        console.log(user[0][0].Password);

        if(!user[0][0]){
           return res.status(401).json({message:"User Cannot Found!"})
        }

        const isPasswordValid = await bcrypt.compare(password,user[0][0].Password);

        if(!isPasswordValid){
           return res.status(401).json({message:"User Cannot Found!"})
        }

        const age = 1000*60*60*24*7;

        const token = jwt.sign({
            id : user[0][0]. ID,
            email:user[0][0]. Email,
           },process.env.JWT_SECRET,{
            expiresIn:age
           });
        
        const {Password, ...userdata} = user[0][0];

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:age,
        }).status(200).json(userdata);

    }catch(err){
        console.log(err);
        res.status(401).json({message:"User Cannot Found!"})
    }
}

const logoutUser = async (req,res)=>{
    res.clearCookie("token").status(200).json({message:"User Logout SuccessFully"});
}

module.exports = {registerUser,loginUser,logoutUser};