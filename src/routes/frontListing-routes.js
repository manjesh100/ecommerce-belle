const express = require('express');
const router = express.Router();
const frontPageProductController = require('../controllers/frontPageProductController');


router.get('/women-list', frontPageProductController.productListWomen); 
router.get('/men-list', frontPageProductController.productListMen); 
router.get('/home-list', frontPageProductController.productListHome);
router.get('/kids-list', frontPageProductController.productListKids);


module.exports = router;


