"use strict";
exports.__esModule = true;
var post_1 = require("../models/post");
function default_1(app) {
    app.get('/write', function (req, res) {
        res.render('write');
    });
    app.post('/write_post', function (req, res) {
        var post_title = req.body.post_title;
        var post_content = req.body.post_content;
        var sess = req.session;
        console.log(sess.userid, post_title, post_content);
        post_1["default"].create({
            userid: sess.userid,
            title: post_title,
            content: post_content
        });
        res.redirect('/');
    });
}
exports["default"] = default_1;
