import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as mysql from 'mysql2';

import config from './config/config';

import indexRouter from "./router/main";

declare var __dirname;
declare var require;

const app = express();
app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(config.port, function(){
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

const router = indexRouter(app, mysql);

