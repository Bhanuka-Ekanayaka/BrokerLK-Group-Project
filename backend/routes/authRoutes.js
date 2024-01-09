const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByUsername } = require('../models/User');

const SECRET_KEY = 'micset993150'; // Replace with a strong, random key

router.post('/register', async (req, res) => {
    const { fullName, email, nic, mobileNumber, username, password } = req.body;  

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await createUser(fullName, email, nic, mobileNumber, username, hashedPassword);

      if(result.insertId >0){
        res.status(201).json({ success: true });
      }else{
        res.status(404).json({message: 'failed'})
      }
    } catch (error) {
      //console.error('Error during registration:', error.message); 
      console.error(error.stack); 
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await getUserByUsername(username);
      console.log('result is', user)
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY);
    //res.json({ success: true, token });
    res.status(201).json({ success: true , token});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;