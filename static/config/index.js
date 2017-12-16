var index = require('../routes/index.js');
var users = require('../routes/users.js');
var login = require('../routes/login.js');
var loginparser = require('../routes/loginparser');
var info = require('../routes/info');
var infos = require('../routes/infos');
var add = require('../routes/add');

module.exports = function(app){

	app.get('/',index);
	app.get('/users',users);
	app.get('/loginparser',loginparser);
	app.get('/login',login);
	app.get('/info',info);
	app.get('/infos',infos);
	app.get('/add',add);
}