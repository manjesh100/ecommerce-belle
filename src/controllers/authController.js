const express = require('express');
const router =  express.Router();
const db = require('../database/connection');
const authService = require('../service/authService');
const Validator = require('Validator'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
const fs= require("fs");
const path = require("path");

class  AuthController
{

  async showSinupPage(req, res)
  {
    res.sendFile(path.join(__dirname, '../../public/pages/samples/register.html')); 
  }
 

  async sinupUser(req, res)
  {
    
    try{
        let rules={
         name: 'required',
         email: 'required|email',
         password: 'required',
         role_code: 'required|numeric',
        };
        const message={
            required: 'You are forgot :attr field ',
            email: ':attr not valid',               
        }
        const passData = Validator.make(req.body, rules);
        if(passData.fails())
        {
            const errors =  passData.getErrors();  
            return res.status(400).json(errors); 
        }
        let password = req.body.password;
        const saltRules = bcrypt.genSaltSync(10);
        const saltpassword = bcrypt.hashSync(password, saltRules);
        const data = {
          name: req.body.name,
          email: req.body.email,
          password: saltpassword,
          role_code: req.body.role_code,
        }  
           let authObject = await authService.createUser(data);
           if(authObject.errno){
            return res.status(500).json({message: authObject.sqlMessage})
          }else{
            return res.status(200).json({authObject, 'message': 'Data save sucessfullay'}); 
          }        
      }catch(error){
        console.log(error.message);
        if(error.message)
        {
          return res.status(400).json({'message': 'somthing went wrong'});
        }

    }    

  }
 
  async loginUser(req, res)
  {

    const rules ={
      email:'required|email',
      password:'required'
     }
     const messages ={
       required: 'You forgot the :attr field',
       email: ':attr is not valid'
     }
     const validateData = Validator.make(req.body, rules);
     if(validateData.fails())
     {
       const errors = validateData.getErrors();
       return res.status(400).json(errors);
     }
      try { 
       
        let condition = {
           email: req.body.email
        }
        let existData = await authService.login(condition);          
        if(existData[0] == null)
        {         
          return res.status(500).json({'massage': '!email does not found'})
        }       
        let password = req.body.password;  
        let passwordValidate = bcrypt.compareSync(password,existData[0].password)      
        if(passwordValidate)
        {                 
          //using jwt 
          let authID = existData[0].id; 
         // console.error(authID);
          const jwtToken = jwt.sign(
            { authID, }, "JwtKey",{
              algorithm: "HS256",
              expiresIn: 3600,
            })  
          let data =existData[0];  
          data.JwtKey = jwtToken
          return res.status(200).json({userdata: data,  "massage": "You are successfully logged in"});
        }else{
          return res.status(500).json({"massage": "password does not match"});
        }
      } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);    
      }

  } 

}
const AuthControllerObject = new AuthController();
module.exports = AuthControllerObject;



