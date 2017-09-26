"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var config_1 = require("./config/config");
var main_1 = require("./router/main");
var post_1 = require("./router/post");
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var server = app.listen(config_1["default"].port, function () {
    console.log("Express server has started on port 3000");
});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function (err, req, res, next) {
    console.log(err, "err");
    res.status(500).send(err);
});
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));
var router = main_1["default"](app);
var router2 = post_1["default"](app);
