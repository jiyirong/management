var express = require('express');
var router = express.Router();

router.get('/users',function(req,res){

	res.render('users',{title:'users'});
})
module.exports = router;