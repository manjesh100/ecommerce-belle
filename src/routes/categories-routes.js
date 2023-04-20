const express =require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const categoriesController = require('../controllers/categoriesController');



router.post('/add-categories',[middleware.JWTAuthData,middleware.userAuth], categoriesController.createCategories); 
router.get('/categories-list',[middleware.JWTAuthData,middleware.userAuth], categoriesController.listCategories); 
router.delete('/categories-delete',[middleware.JWTAuthData,middleware.userAuth], categoriesController.categoriesDelete); 



module.exports = router;