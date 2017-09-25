import config from './config/config';
declare var __dirname;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mysql = require('mysql2');

app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(config.port, function(){
	console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (err, req, res, next) {
	console.log(err, "err");
	res.status(500).send(err);
})

app.use(session({
	secret: '@#@$MYSIGN#@$#$',
	resave: false,
	saveUninitialized: true
}));


var router = require('./router/main')(app, mysql);
