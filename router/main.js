module.exports = function(app, mysql)
{
	app.get('/',function(req, res){
		var sess = req.session;
		
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
		var sess = req.session;
		if(sess.userid){
			res.redirect('/');
		}
		else{
			res.render('login');
		}

	});

	app.post('/userlogin', function(req, res){
		var id = req.body.id;
		var password = req.body.password;

		console.log(id,password);

		var sess = req.session;

		// if(!sess.userid){
		// 	sess.userid = id;
		// 	sess.password = password;
		// }
		var connection = mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'skek1009',
			port:3306,
			database:'loginout_db'
		});

		var password_db;
		var userid_db;
		connection.connect();

		connection.query('SELECT userid,password FROM User where userid="' + id + '" && password="'+ password +'"', function(err, rows, fields) {
			// res.json(rows);
			userid_db = rows[0] ? rows[0].userid : 0;
			password_db = rows[0] ? rows[0].password : 0;
			console.log(userid_db,password_db);
			connection.end();

			if((id == userid_db) && (password == password_db)){
				if(!sess.userid) {
					sess.userid = id;
					sess.password = password;

					res.redirect('/');
				}
			}
			else{
				res.redirect('/login');
			}
		});
	});

	app.get('/logout', function(req, res){
		sess = req.session;

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
		
	});
}












