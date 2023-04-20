const express = require('express');
const router =  express.Router();
const db = require('../database/connection');
//const authService = require('../service/authService');
const Validator = require('Validator'); 
 
const path = require("path");
 
 

class  dashboardController
{

  async dashboard(req, res)
  {
    res.sendFile(path.join(__dirname, '../../public/pages/view/dashboard.html'));
  }
 
 
   

}
const dashboardControllerObject = new dashboardController();
module.exports = dashboardControllerObject;



