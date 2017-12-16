var express = require('express');
var router = express.Router();

router.get('/',function(req,res){

	res.render('index',{title:'express',data:[
			{id:'0',name:'zhangsan1'},
			{id:'1',name:'zhangsan2'},
			{id:'2',name:'zhangsan3'},
			{id:'3',name:'zhangsan4'},
		]});
})
module.exports = router;