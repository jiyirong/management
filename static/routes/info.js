var express = require('express');
var router = express.Router();

router.get('/info',function(req,res){

	res.render('info',{title:'users'});
})
module.exports = router;