const mysql = require('mysql2');  
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'nodejsdatabase' 
});

connection.connect(function(error){
if(!(error))
{
console.log("Database connection sucessfully stabled")
}else{
console.log("connection error")
}
})
//console.log(MAX_VALUE);
module.exports =connection;