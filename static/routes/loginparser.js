var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var mysql = require('mysql');
var selectmysql = require('../modules/select');

router.get('/loginparser',function(req,res){
	var query = url.parse(req.url).query;
	var userParams = querystring.parse(query);
	selectmysql.getUserLogin(userParams,function(userInfo){

		res.json(userInfo);
	})
	
})
module.exports = router;