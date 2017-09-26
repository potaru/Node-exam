"use strict";
exports.__esModule = true;
var user_1 = require("../models/user");
var post_1 = require("../models/post");
function default_1(app) {
    app.get('/', function (req, res) {
        var sess = req.session;
        if (!sess.userid) {
            res.redirect('/login');
        }
        else {
            post_1["default"].findAll({}).then(function (posts) {
                res.render('index', {
                    userid: sess.userid,
                    password: sess.password,
                    posts: posts
                });
            })["catch"](function (error) {
                console.log(error, "error");
            });
        }
    });
    app.get('/login', function (req, res) {
        var sess = req.session;
        if (sess.userid) {
            res.redirect('/');
        }
        else {
            res.render('login');
        }
    });
    app.post('/userlogin', function (req, res) {
        var input_id = req.body.id;
        var input_password = req.body.password;
        console.log(input_id, input_password);
        var sess = req.session;
        user_1["default"].findOne({
            where: { userid: input_id, password: input_password }
        })
            .then(function (user) {
            console.log(user.id, user.userid, user.password, user.name);
            if (!sess.userid) {
                sess.userid = input_id;
                sess.password = input_password;
                res.redirect('/');
            }
            else {
                res.redirect('/login');
            }
        })["catch"](function (error) {
            console.log(error, "error");
            res.redirect('/login');
        });
    });
    app.get('/logout', function (req, res) {
        var sess = req.session;
        if (sess.userid) {
            sess.destroy(function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        res.redirect('/');
    });
    app.get('/signUp', function (req, res) {
        res.render('signUp');
    });
    app.post('/user_signUp', function (req, res) {
        var signUp_userid = req.body.signUp_userid;
        var signUp_password = req.body.signUp_password;
        var signUp_name = req.body.signUp_name;
        user_1["default"].create({
            userid: signUp_userid,
            password: signUp_password,
            name: signUp_name
        });
        res.redirect('/login');
    });
}
exports["default"] = default_1;
