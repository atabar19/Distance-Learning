var express = require('express');
var app = express();

function passROute(){
	app.get('/profile', function(req, res){
	res.sendfile(__dirname + '/profile.html');
}};

exports.passROute = passROute;