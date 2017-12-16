var mysql = require('mysql');
var connection = mysql.createConnection({
    'host':'localhost',
    'port':3306,
    'user':'root',
    'password':'123',
    'database':'admin'
})
connection.connect();

function user(user,callback){
    connection.query('INSERT INTO userInfo(name,age,work,study) VALUES(?,?,?,?)',[user.name  ])

}
module.exports = user;