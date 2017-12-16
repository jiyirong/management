var mysql = require('mysql');
var connection = mysql.createConnection({
    'host':'localhost',
    'port':3306,
    'user':'root',
    'password':'123',
    'database':'admin',
    'connectionLimit':10 
})
connection.connect();

function user(callback){

    connection.query('select * from userInfo',function(err,row){

        callback(row);
    })
}
module.exports = user;