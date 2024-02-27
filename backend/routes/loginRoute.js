const express = require('express');
const LoginController = require('../controllers/loginController');

const router = express.Router();

router.post('/login', LoginController.loginUser);
router.post('/reset/:name', LoginController.resetPasswordController);

module.exports = router;