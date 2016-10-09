// server.js

var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/bar');

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express Server on port ', app.get('port'));
})