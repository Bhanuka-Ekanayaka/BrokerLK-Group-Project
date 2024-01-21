const express = require('express');
const getReports = require('../models/reports');
const router = express.Router();

router.get('/create',getReports);

module.exports=router;
