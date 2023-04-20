const express = require('express');
const router = express.Router();
const orderService = require('../service/orderService');
const Validator = require('Validator'); 

class orderDetails
{
    async orderDetails(req, res)
    {
        try{                
            let rules={
                userId: 'required',
                grandTotal: 'required',                                
            };
            let message ={
                require: 'you forgot the :att field'
            };
            const v = Validator.make(req.body,rules); 
            if (v.fails()){               
                const errors = v.errors;                 
                return res.status(400).json(errors);               
            }
            if (v.passes()){                 
                let orderDetails={
                    orderNumber:  Math.floor(Math.random() * 1115854645),
                    userId: req.body.userId,
                    total: req.body.grandTotal,
                    grandTotal: req.body.grandTotal, 
                    deliverType: `cash on delivery`,
                    paymentStatus: 1   
                }
                let orderDetailsObject = await orderService.ordermaster(orderDetails);                            
                if(orderDetailsObject.errno){
                    return res.status(500).json({ message: orderDetailsObject.sqlMessage });
                }else{                      
                    return res.status(200).json({ orderDetailsObject, 'message': 'order save sucessfully save'})
                }
            }             
        }catch(error){
            console.log(error);
            console.error(error.sqlMessage);             
        } 
    } 
    async orderList(req, res)
    {

        try{                
            let rules={
                userId: 'required',                                           
            };
            let message ={
                require: 'you forgot the :att field'
            };
            const v = Validator.make(req.body,rules); 
            if (v.fails()){               
                const errors = v.errors;                 
                return res.status(400).json(errors);               
            }
            if (v.passes()){                 
                let userId={ 
                    userId: req.body.userId                    
                }
                let orderDetailsObjectList = await orderService.orderListService(userId);                            
                if(orderDetailsObjectList.errno){
                   
                    return res.status(500).json({ message: orderDetailsObjectList.sqlMessage });
                }else{                      
                    return res.status(200).json({ orderDetailsObjectList, 'message': 'user order List sucessfully Lode.'})
                }
            }             
        }catch(error){
            console.log(error);
            console.error(error.sqlMessage);     
            
        } 
    }

}
const orderDetailsObject = new orderDetails();
module.exports = orderDetailsObject;