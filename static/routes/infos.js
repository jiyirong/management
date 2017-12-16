var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var mysql = require('mysql');
var selectmysql = require('../modules/info');

router.get('/infos',function(req,res){

	selectmysql(function(data){

		res.json(data);
	})
})
module.exports = router;