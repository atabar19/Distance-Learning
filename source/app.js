var express = require('express');
var app = express();

var mongo = require('./routes/mongo.js');

app.get('/', function(req, res){
	res.sendfile(__dirname + '/LogAdmin.html');
})

app.get('/MainAdmin', function(req, res){
	res.sendfile(__dirname + '/MainAdmin.html');
})

app.get('/AdminEditVid', function(req, res){
	res.sendfile(__dirname + '/AdminEditVid.html');
})

app.get('/profile', function(req, res){
	res.sendfile(__dirname + '/profile.html');
})

app.get('*', function(req, res){
	res.send("Page not found", 404);
});

function errorHandler( err, req, res, next ) {
	console.error( err.message );
	console.error( err.stack );
	res.status( 500 );
	res.render( 'app_error' , { error: err } );
}

var server = app.listen(8081, function(){
	console.log('Listening on port %d', server.address().port);
});