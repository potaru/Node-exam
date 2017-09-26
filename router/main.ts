import config_db from '../config/config_db';
import { Router } from 'express';
import { mysql } from 'mysql2';
import { Promise } from 'bluebird';

import User from '../models/user';

export default function(app, mysql){
    app.get('/',function(req, res){
        const sess = req.session;
        
        if(!sess.userid){
            res.redirect('/login')
        }
        else{
            res.render('index',{
                userid: sess.userid,
                password: sess.password
            })
        }
    });

    app.get('/login', function(req, res){
        const sess = req.session;
        if(sess.userid){
            res.redirect('/');
        }
        else{
            res.render('login');
        }

    });

    app.post('/userlogin', function(req, res){
        const input_id = req.body.id;
        const input_password = req.body.password;

        console.log(input_id,input_password);

        const sess = req.session;
        
        User.findOne({
            where: { userid: input_id , password: input_password }
        })
        .then((user) => {
            console.log(user.id,user.userid,user.password,user.name);
            if(!sess.userid){
                sess.userid = input_id;
                sess.password = input_password;

                res.redirect('/');
            }
            else{
                res.redirect('/login');
            }
        })
        .catch((error) => {
            console.log(error, "error");
            res.redirect('/login');
        });
    });

    app.get('/logout', function(req, res){
        const sess = req.session;

        if(sess.userid){
            sess.destroy(function(err){
                if(err){
                    console.log(err);
                }
            });
        }
        res.redirect('/');
    })

    app.get('/signUp', function(req, res){
        res.render('signUp');
    });

    app.post('/user_signUp', function(req, res){
        const signUp_userid = req.body.signUp_userid;
        const signUp_password = req.body.signUp_password;
        const signUp_name = req.body.signUp_name;
        User.create({
            userid: signUp_userid,
            password: signUp_password,
            name: signUp_name
        });
        res.redirect('/login');
    });
}

