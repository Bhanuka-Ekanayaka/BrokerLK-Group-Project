const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { createUser, getUserByEmail } = require('../models/User');
const { error } = require('console');

const SECRET_KEY = 'micset993150'; // Replace with a strong, random key

router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;  

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await createUser(email, hashedPassword, role);
      console.log('Result is',result)

      if(result.affectedRows > 0){
        res.status(201).json({ success: true });
      }else{
        res.status(404).json({message: 'failed'})
      }
    } catch (error) {
      console.error(error.stack); 
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    //console.log('name', password)
  
    try {
      const user = await getUserByEmail(email);
      //console.log('user is', user)
  
      if (!user) {
        res.status(401).json({ success: false, error: 'Invalid Username' });
        return;
      }else{
        bcrypt.compare(password,user[0].password,(error, result)=>{
          if(error){
            return res.status(402).json({ success: false, error: 'Invalid Password' });
              
          }
          if(result){
          const token = jwt.sign({ email: user.email }, SECRET_KEY);
          res.status(201).json({ success: true, token });
          }
        })
      }
  
      
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });


module.exports = router;



/* Purpose: The AuthRoutes.js file defines the authentication-related routes for your backend API. 
It includes endpoints for user registration, login, logout, and potentially other authentication-related actions.
Reason for Use: Organizing routes related to authentication in a separate file helps keep your codebase organized. 
It makes it clear which routes are specifically handling authentication concerns. 
The file may use functions from User.js to interact with the database and perform authentication-related operations. */
