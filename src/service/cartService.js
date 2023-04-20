const { json } = require('body-parser');
const express = require('express');
const app = express();
const db = require('../database/connection');
 
class catService
{
    async  cartDataSave(cartData)
    {      

        try{                 
            let userId = cartData.userId;
            let productId = cartData.productId;
            let cartListObject = await db.promise().query(`select * from  cart_master where userId = ? AND productId= ?`, [userId, productId])
             //console.log(cartListObject[0][0]);
            //console.log(cartListObject[0][0].productId);
            if(cartListObject[0][0] == undefined)
            {
                let cartObject = await db.promise().query(`insert into cart_master set ? `, [cartData]);
                return cartObject[0];    
            }else{                      
                    let cartUpdateId =cartListObject[0][0].id;
                    let quantity = cartListObject[0][0].quantity;
                    let requestQuantity = parseInt(cartData.quantity);
                    let quantitayUpdate =quantity +  requestQuantity;   
                    //console.log(typeof(quantitayUpdate));               
                    let quantityUpdate={                       
                        'quantity': quantitayUpdate                   
                    }                                                    
                    let cartObject  = await db.promise().query(`update cart_master set ? where id = ?`,[quantityUpdate,cartUpdateId]);
                    return cartObject[0];
            }  
        }catch(error){
            console.log(error.sqlMessage);
            return error.sqlMessage;            
        }   

    }

    async cartDataList(userId)
    {    
        console.log(userId);

        try{
            let cartListObject = await db.promise().query(`select 
            cart_master.id,cart_master.productId, product_master.name, product_master.picure,product_master.price,cart_master.quantity,
            ROUND(product_master.price * cart_master.quantity) as grandTotal   
             from  cart_master inner join product_master ON cart_master.productId =product_master.id where cart_master.userId = ${userId}`)
            return cartListObject[0];
        }catch(error){
            return error.sqlMessage;            
        }
    }
    async cartDelete(cartId)
    {
        try {  
            
            let dataBojectDeleteService =await db.promise().query(`delete from cart_master where id = ${cartId}`)
            return dataBojectDeleteService[0];            
        } catch (error) {
            return error.sqlMessage;            
        }
    }
    async cartCount(userId)
    {
        try {
            let cartCountObject = await db.promise().query(`SELECT count(*) as countCartData FROM cart_master where userId = ${userId}`);
            return cartCountObject[0];            
        }catch(error){
            return error.sqlMessage;            
        }
    }

    async cartUpdateService(cartUpdate)
    {
        try {            
            console.log(cartUpdate.userId);
            let quantityUpdate={                       
                'quantity': cartUpdate.quantity                   
            }                                                    
            let cartFinalObject  = await db.promise().query(`update cart_master set ? where productId = ? AND userId= ?`,[quantityUpdate,cartUpdate.productId,cartUpdate.userId]);
            return cartFinalObject[0];            
            }catch(error){
            console.log(error);
            return error.sqlMessage;            
            }


    }
   


}

const catServiceObject = new catService;
 module.exports = catServiceObject;
 


 