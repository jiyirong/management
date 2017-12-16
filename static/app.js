var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./config')(app);
app.listen(8081);

