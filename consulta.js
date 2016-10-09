var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var _idProcurado = new ObjectId('57f9bfd818dccbdb6cec17d8');

MongoClient.connect('mongodb://127.0.0.1:27017/bar',
	function (erro, db) {
		if(erro) throw err;
		db.collection('contatos').findOne({_id: _idProcurado},
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
		);
	}
);