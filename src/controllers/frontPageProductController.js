const express = require('express');
const router = express.Router();
const frontPageProductService = require('../service/frontPageProductService');


class frontPageProductController
{


    async productListWomen(req, res)    
   {
            try {  

                 let womenListObject =  await frontPageProductService.woMensList();
                 if(womenListObject.erron)
                 {
                    return res.status(500).json({ message: womenListObject.sqlMessage });
                 }else{
                    return res.status(200).json({ womenListObject, 'message': 'Data list sucessfullay' });
                 }
            } catch (error) {
                console.log(error);        
            
        }
   }


   async productListMen(req, res)    
   {
            try {  

                 let mensListObject =  await frontPageProductService.mensList();
                 if(mensListObject.erron)
                 {
                    return res.status(500).json({ message: mensListObject.sqlMessage });
                 }else{
                    return res.status(200).json({ mensListObject, 'message': 'Data list sucessfullay' });
                 }
            } catch (error) {
                console.log(error);        
            
        }
   }

   async productListHome(req, res)
   {
      try {
         let homeProductList = await frontPageProductService.homeList();        
          if(homeProductList.error)
          {
            return res.status(500).json({ message: homeProductList.sqlMessage });
          }else{
            

            return res.status(200).json({ homeProductList, 'message': 'Data list sucessfullay' });
          }
      } catch (error) {
         console.log(error);       
         
      } 
   }

   async productListKids(req, res)
   {
      try {
         let kidsProductList = await frontPageProductService.kidsList();
          if(kidsProductList.error)
          {
            return res.status(500).json({ message: mensListObject.sqlMessage });
          }else{

            return res.status(200).json({ kidsProductList, 'message': 'Data list sucessfullay' });
          }
      } catch (error) {
         console.log(error);       
         
      } 
   } 

}

const frontPageProductControllerObject = new frontPageProductController();
module.exports = frontPageProductControllerObject;