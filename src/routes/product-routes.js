const express =require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const productcontroller = require('../controllers/productController');

const path = require("path")
const multer = require('multer');
const upload = multer({dest: path.normalize(__dirname + "../../../public/assets/images/productImage/")})
//middleware.JWTAuthData,middleware.userAuth, 


 
 
router.post('/add-product',[middleware.JWTAuthData,middleware.userAuth,upload.single("picure")], productcontroller.saveProduct); 
router.post('/product-list',[middleware.JWTAuthData,middleware.userAuth], productcontroller.productList); 
router.get('/all-product-list',[middleware.JWTAuthData,middleware.userAuth], productcontroller.allProductList); 
router.delete('/delete-product', [middleware.JWTAuthData,middleware.JWTAuthData], productcontroller.productDelete);

module.exports = router;