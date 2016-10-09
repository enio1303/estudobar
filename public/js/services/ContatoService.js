// public/js/services/ContatoService.js

angular.module('bar').factory('Contato', function($resource){
	
	return $resource('/contatos/:id');
});