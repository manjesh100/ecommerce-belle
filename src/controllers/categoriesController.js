const express = require('express');
const router = express.Router();
const Validator = require('Validator');
const categoriesService = require('../service/categoriesService');




class Categories {

    async createCategories(req, res) {
         
        try {             
            let rules = {
                cateName: 'required',
            };
            let message = {
                require: 'you forgot the :att field'
            };
            const v = Validator.make(req.body,rules);             
            if (v.fails()) {               
                const errors = v.errors;                 
                return res.status(400).json(errors);               
            }
           
            if (v.passes()) {
                let categoriesData = {
                    cateName: req.body.cateName,
                    status: 1
                }
                let categoriesResult = await categoriesService.categoriesSave(categoriesData);
                 
                if (categoriesResult.errno) {
                    return res.status(500).json({ message: categoriesResult.sqlMessage });
                } else { 
                     
                    return res.status(200).json({ categoriesResult, 'message': 'Categories sucessfully save' })
                }
            }
        } catch (error) {               
            return res.status(400).json(error);
        }
    }

    async listCategories(req, res) {
        
        try {
           
            let categoriesObjectList = await categoriesService.categoriesList();
            if (categoriesObjectList.errno) {      
                return res.status(500).json({ message: categoriesObjectList.sqlMessage })
            } else {  
                return res.status(200).json({ categoriesObjectList, 'message': 'Data list sucessfullay' });

            }
        } catch (error) {     
            return res.status(400).json({ 'message': 'somthing went wrong' });

        }

    }
    
    async categoriesDelete(req, res)
    { 
      
        try {
             let cateId = req.body.cateId; 
            let categoriesDelete = await categoriesService.categoriesServiceDelete(cateId);
            if(categoriesDelete.error)
            {
                return res.status(500).json({message: categoriesDelete.sqlMessage}); 
            }else{
                return res.status(200).json({categoriesDelete, 'message': 'categories data sucessfully delete' });
            } 
              
        } catch (error) {
            return error.message;
            
        }



    }





}
const categoriesControllerObject = new Categories();
module.exports = categoriesControllerObject;



