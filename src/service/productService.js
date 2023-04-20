const express = require('express');
const app = express();
const db = require('../database/connection');


class productService
{

    async productSave(data)
    { 
        try{            
            let productObject = await db.promise().query(`insert into product_master set ?`,[data]);   
            return productObject[0];             
        } catch (error) {           
            console.error(error.sqlMessage);
            return error.sqlMessage;            
        }   

    }
    async productList(data)
    {
        try {
            let productList = await db.promise().query(`select * from product_master where catId= ?`,[data]);
            return productList[0]; 
        } catch (error) {
            console.error(error.sqlMessage); 
            return error.sqlMessage; 
        } 
    } 
    
    async allProductList()
    {
        try{
            let productListAll = await db.promise().query(`select * from product_master where status= 1`);
            return productListAll[0]; 
         }catch(error) {
            console.error(error.sqlMessage);
            return error.sqlMessage; 
        } 
    }

    async productListDeleteservice(productId)
    {
        
        try {
            let productDeleteObj = await db.promise().query(`delete from product_master where id = "${productId}"`);             
            return productDeleteObj[0]; 
        } catch (error){
            console.error(error.sqlMessage);
            return error.sqlMessage;

            
        }



    }
    
    

}
const productServiceObject = new productService();
module.exports = productServiceObject;
