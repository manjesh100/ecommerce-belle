const express = require('express');
const router = express.Router();
const db = require('../database/connection');
const jwt = require('jsonwebtoken');


const middleware = { 
    JWTAuthData: async function (req, res, next)
    {
        let token = req.headers.authorization;   
        
        if(token){
            try {             
                const signedObj = jwt.verify(token, 'JwtKey');                 
                req.jwtVerifier = signedObj;                  
            } catch (error) {
                return res.status(404).json(error) 
            }
            next();
        } 
    },
    userAuth: async function (req, res, next) {
        try {
           let userId = req.jwtVerifier.authID;            
           //console.log(userId, "userid");
            let result = await db.promise().query (`select role_code from users where id = ${userId}`)           
            if(result[0][0].role_code !== 1){
                throw new Error('you are not authorized user');
            }
        } catch (error) {
            return res.status(403).json(error); 
        }  
       next();
    }   


}
module.exports = middleware;