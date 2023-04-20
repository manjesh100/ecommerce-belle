const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const cartController = require('../controllers/cartController');

<<<<<<< HEAD


=======
>>>>>>> f439e7b861e3d7ba594d16a38de91341dbc1c92b
router.post('/add-cart',[middleware.JWTAuthData,middleware.userAuth], cartController.addCart); 
router.post('/cart-list',[middleware.JWTAuthData,middleware.userAuth], cartController.cartList);
router.delete('/cart-delete', [middleware.JWTAuthData,middleware.JWTAuthData, cartController.cartDelete]);
router.post('/count-cart',[middleware.JWTAuthData,middleware.JWTAuthData, cartController.cartCount]);
router.post('/count-update',[middleware.JWTAuthData,middleware.JWTAuthData, cartController.countUpdate]);
 

<<<<<<< HEAD



module.exports = router;

=======
module.exports = router;

eeeeeeeee
>>>>>>> f439e7b861e3d7ba594d16a38de91341dbc1c92b
