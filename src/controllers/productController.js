const { request } = require('express');
const express = require('express');
const router = express.Router();

const Validator= require('Validator');
const productService = require('../service/productService');
const fs = require("fs");
const path = require("path");



class productcontroller 
{


  

    async  saveProduct(req, res) 
    {     
        try {  
            let categoriesId  = req.body.catId;
            if(categoriesId)
            {
            fs.renameSync(path.normalize(__dirname + "../../../public/assets/images/productImage/"+req.file.filename), path.normalize(__dirname + "../../../public/assets/images/productImage/"+req.file.originalname))
            console.log(req.file)  
            }
            let rules ={
                //user_id :'required|integer',
                catId :'required|integer', 
                name :'required', 
                quantity :'required|integer',
                price :'required'                 
               };
               let messages = {
                // custom message for based rules
                required: 'You forgot the :attr field', 
            }; 
            let v = Validator.make(req.body,rules);
            if (v.fails()) 
            { 
                const errors = v.getErrors();
                console.log(errors);
                return res.status(500).json(errors); 
            }
            if(v.passes())
            { 
                let ProductData =  {
                    user_id :req.jwtVerifier.authID,
                    catId : req.body.catId,
                    name : req.body.name,
                    picure : req.file.originalname,
                    quantity : req.body.quantity,
                    price : req.body.price
                }
                console.log();
                let productControllerObject = await productService.productSave(ProductData);
                if(productControllerObject.errno){
                    return res.status(500).json({message: productControllerObject.sqlMessage})
                  }else{
                    return res.status(200).json({productControllerObject, 'message': 'Data save sucessfullay'})                   
                  }  

            } 
        } catch (error) {
            console.log(error.message);
            if(error.message)
            {
              return res.status(400).json({'message': 'somthing went wrong'});
            }            
        }     
        
    } 
    
    
    async productList(req, res)
    {
        try {

            let rules ={
                catId :'required|integer'                             
               };
               let messages = {
                // custom message for based rules
                required: 'You forgot the :attr field', 
            }; 
            let v = Validator.make(req.body,rules);
            if (v.fails()) 
            { 
                const errors = v.getErrors();
                console.log(errors);
                return res.status(500).json(errors); 
            }
            if(v.passes())
            {  
              let  catId = req.body.catId;
              let productListObject = await productService.productList(catId);
              if(productListObject.errno)
              {
                return res.status(500).json({message: productListObject.sqlMessage}); 
              }else{
                return res.status(200).json({messages: productListObject}); 
              } 
            } 
            
        } catch (error) {
            return error.message;            
        } 


    } 
    async allProductList(req, res)
    { 
        try {
            let allproductList = await productService.allProductList();
            return res.status(200).json({allproductList, 'message': 'all product list sucessfullay'});  
        } catch (error) 
        {
              return error.message;
        } 
            
    }

    async productDelete(req, res)
    {    
      try {
       let productId = req.body.productId;
       console.log(productId);
       let allproductDelete = await productService.productListDeleteservice(productId);
       
       if(allproductDelete.errno)
       {
        return res.status(500).json({allproductDelete, 'message': 'something went rong'}); 
       }else{
        return res.status(200).json({allproductDelete, 'message': 'data sucessfully delete'}); 
       } 
      }catch (error) {
        return error.sqlMessage; 
      }

    }
 
    



}

const productObject = new productcontroller();
module.exports = productObject;
