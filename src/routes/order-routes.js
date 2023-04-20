const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const oderController = require('../controllers/oderController');


router.post('/order-details',[middleware.JWTAuthData,middleware.userAuth], oderController.orderDetails); 
router.post('/order-list',[middleware.JWTAuthData,middleware.userAuth], oderController.orderList); 





 
module.exports = router;