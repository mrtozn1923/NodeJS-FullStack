const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodejs',
    password:'root'
});

module.exports=connection.promise();