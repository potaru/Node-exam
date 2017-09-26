import { Router } from 'express';
import { Promise } from 'bluebird';

import Post from '../models/post';

export default function(app){
	  app.get('/write', function(req, res){
        res.render('write');
    });

    app.post('/write_post', function(req, res){
        const post_title = req.body.post_title;
        const post_content = req.body.post_content;

        var sess = req.session;
        console.log(sess.userid,post_title,post_content);
        Post.create({
            userid: sess.userid,
            title: post_title,
            content: post_content
        });
        res.redirect('/');
    });
}