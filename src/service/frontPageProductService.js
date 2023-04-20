const express = require('express');
const app = express();
const db = require('../database/connection');

class frontPageProduct
{
    async woMensList(req, res)
    {
        try{
            try {
                let woMensListObject = await db.promise().query(`select * from product_master where catId= 64`);
                return woMensListObject[0];
                
            } catch (error) {
                
                console.log(error.sqlMessage);
                return error.sqlMessage;        
            }            
        } catch (error) {
            console.log(error);            
        }

    } 


    async mensList(req, res)
    {
        try{
            try {
                let mensListObject = await db.promise().query(`select * from product_master where catId= 60`);
                return mensListObject[0];
                
            } catch (error) {
                
                console.log(error.sqlMessage);
                return error.sqlMessage;        
            }            
        } catch (error) {
            console.log(error);            
        }

    } 

    async homeList(req, res)
    {
        try{
            try {
                let homeListObject = await db.promise().query(`select * from product_master where catId= 63`);                
                return homeListObject[0];                
            } catch (error) {
                
                console.log(error.sqlMessage);
                return error.sqlMessage;        
            }            
        } catch (error) {
            console.log(error);            
        }

    } 

    async kidsList(req, res)
    {
        try{
            try {
                let kidsListObject = await db.promise().query(`select * from product_master where catId= 65`);
                return kidsListObject[0];
                
            } catch (error) {
                
                console.log(error.sqlMessage);
                return error.sqlMessage;        
            }            
        } catch (error) {
            console.log(error);            
        }

    } 



    




    


}

const frontPageProductOject  =new frontPageProduct;
module.exports = frontPageProductOject;


 