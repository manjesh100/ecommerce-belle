const express = require('express')
const app = express()
const db = require('../database/connection');


class authService
{

    async createUser(data)
    {           
      
        try {            
            let userObject = await db.promise().query(`insert into users set ?`,[data]);   
            return userObject[0];             
        } catch (error) {           
            console.error(error.sqlMessage);
            return error.sqlMessage;            
        }    

    }
    async login(condition)
    {
        try {
            let existData = await db.promise().query(`select * from users where ?`, condition)
            return existData[0];            
        } catch (error) {
            return error;                
        }         

    }  
}
const authServiceObject = new authService();
module.exports = authServiceObject;
