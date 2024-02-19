// userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateLoginTime } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/updateLoginTime', updateLoginTime); 

module.exports = router;
