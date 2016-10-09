// config/database.js

var mongoose = require('mongoose');

module.exports = function (uri) {
	mongoose.connect(uri);

	mongoose.connection.on('connected', function(){
		console.log('Mongoose conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose desconectado de ' + uri);
	});

	mongoose.connection.on('error', function(erro){
		console.log('Mongoose erro de conexão em ' + erro);
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Mongoose desconectado pelo término da aplicação');

			process.exit(0); //sem erros
		});
	});

};