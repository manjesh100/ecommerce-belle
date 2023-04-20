const fs= require("fs");
const path = require("path");
const express = require('express');
const app = express();
const port = 9000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


const cors = require('cors');
app.use(cors());   

//global.urlAPIPath = '';
app.use(express.static(__dirname + '/public/pages/'));  
const authRouteURL = require('./src/routes/user-routes');
app.use('/auth', authRouteURL);
const dashboardUrl = require('./src/routes/dashboard-routes');
app.use('/', dashboardUrl);
const categoriesdUrl = require('./src/routes/categories-routes');
app.use('/categories', categoriesdUrl);
const  productUrl = require('./src/routes/product-routes');
app.use('/product', productUrl); 




const pagelist = require('./src/routes/frontListing-routes');
app.use('/front-product', pagelist);

const cartMaster = require('./src/routes/cart-routes');
app.use('/cart', cartMaster);

const orderRoutesMaster = require('./src/routes/order-routes');
app.use('/order', orderRoutesMaster);


 





app.listen(port, () =>{	
	console.log(`ports app listening on port ${port}`)
})