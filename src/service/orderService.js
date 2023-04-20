const express = require("express");
const app = express();
const db = require('../database/connection');

class orderService
{
   async ordermaster(data)
   {     
        try{
            let orderMasterList = await db.promise().query(`insert into order_master set ?`,[data]);
            let orderMasterListCount = await db.promise().query(`select * from cart_master where userId= ${data.userId} AND status=1`);
            //console.log(orderMasterListCount[0].length);
            for(let i = 0; i < orderMasterListCount[0].length; i++ )
            {
                let orderDetails={
                    orderId:  data.orderNumber,
                    productId: orderMasterListCount[0][i].productId,
                    userId:  orderMasterListCount[0][i].userId,
                    quantity:  orderMasterListCount[0][i].quantity,
                    shopingDate:  orderMasterListCount[0][i].shopingDate,
                    status:  1,  
                }
                 await db.promise().query(`insert into order_history set ?`,[orderDetails]);
                 await db.promise().query(`DELETE from cart_master WHERE userId = ${data.userId}`);   
                 //mail service start 

                 //mail service end
                //console.log(data.orderNumber); 
                // console.log(orderMasterListCount[0].length);
                //console.log(orderMasterListCount[0][i].id);
            }
            return orderMasterList[0];
        }catch(error){
            console.error(error.sqlMessage); 
            return error.sqlMessage; 
            }
   }
   async orderListService(userId)
   {
    
    try {
        let orderListObject = await db.promise().query(`select * from  order_master
         where  ? order by orderId DESC`,[userId]);
        return orderListObject[0];      
    } catch (error) {
        console.error(error.sqlMessage); 
        return error.sqlMessage;         
    }


   }
}
const orderServiceObject = new orderService();
module.exports = orderServiceObject;


 