const express = require('express');
const dashboardObject = require('../controllers/dashboardController.js');  
const router = express.Router(); 

router.get('/dashboard', dashboardObject.dashboard);
 

module.exports = router;