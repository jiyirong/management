var mysql = require('mysql');
var connection = mysql.createConnection({
    'host':'localhost',
    'port':'3306',
    'user':'root',
    'password':'123',
    'database':'admin'
})
connection.connect();

function User(user){

    this.name = user.name;
    this.password = user.pwd;
}
User.getUserLogin = function(user,callback){

    connection.query('select * from users where name = ?',[user.name],function(err,row){

        function checkArr(checkuser){

            return checkuser.password = user.pwd;
        }

        if(row.some(checkArr)){

            callback({code:0,msg:'登陆成功'});
        }
        else{

            callback({code:1,msg:'登录失败'});
        }
    })
}


module.exports = User;