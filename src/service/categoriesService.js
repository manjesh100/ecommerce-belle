const express = require ('express');
const app = express();
const db = require('../database/connection');


class categories
{
  async categoriesSave(data)
  {
    try {
        let categoriesObject = await db.promise().query(`insert into categories_master set ?`,[data]);
        return categoriesObject[0];
        
    } catch (error) {
        
        console.log(error.sqlMessage);
        return error.sqlMessage;        
    }
  }
  async categoriesList()
  {
    try {  
        let categoriesListservice = await db.promise().query(`select * from categories_master where status = 1`);        
        return categoriesListservice[0];        
    }catch (error){
        console.log(error.sqlMessage);
        return error.sqlMessage; 
    } 
  }
  async  categoriesServiceDelete(data)
  {
    try {
      let categoriesDeltete = await db.promise().query(`delete from categories_master where id = "${data}"`);
         return categoriesDeltete[0]; 
    } catch (error) {
      console.log(error.sqlmessage);
      return error.sqlMessage; 
    } 
  }
  


}
const categoriesObject = new categories();
module.exports = categoriesObject;