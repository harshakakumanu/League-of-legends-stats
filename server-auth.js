/**
 * Created by harshavardhan on 15-02-16.
 */
var express = require('express');
var jwt = require('jwt-simple');
var bodyParser = require('body-parser');
var _ = require('lodash');
var bcrypt = require('bcrypt');
var User = require('./user');


var app = express();

app.use(bodyParser.json());


var secretKey  = 'supersecretkey';

function findUserByUsername(username) {
	return _.find(users, {username: username});
}

function validateUser(user, password) {
	return bcrypt.compareSync(password, user.password);
}

app.post('/session', function (req, res, next) {
	User.findOne({username: req.body.username}, function (err, user) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send(401);
		}
		bcrypt.compare(req.body.password, user.password, function (err, valid) {
			if (err) {
				return next(err);
			}
			if (!valid) {
				return res.send(401);
			}
			var token = jwt.encode({username: user.username}, secretKey);
			res.json(token);
		})
	})
});
app.post('/user', function (req, res, next) {
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password, 10, function (err, hash) {
		user.password = hash;
		user.save(function (err, user) {
			if (err) {
				throw next(err);
			}
			res.send(201);
		})
	})
});
app.get('/user', function (req, res) {
	var token = req.headers['x-auth'];
	var auth = jwt.decode(token, secretKey);
	User.findOne({username: auth.username}, function (err, user) {
		res.json(user);
	})
});


app.listen(3000,function(){
	console.log("server listening on",3000);
});


