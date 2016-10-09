//// public/js/controllers/ContatoController.js

angular.module('bar').controller('ContatoController', function($scope, $routeParams, Contato){

	console.log($routeParams.contatoId);


	if($routeParams.contatoId){
		Contato.get({id: $routeParams.contatoId},
			function(contato){
				$scope.contato = contato;
			},
			function(erro){
				$scope.mensagem = {
					texto: 'Não foi possível obter o contato.'
				};
				console.log(erro);
			}
		);
	} else {
		$scope.contato = new Contato();
	};

	$scope.salva = function(){
		$scope.contato.$save()
			.then(function(){
				//limpa formulário
				$scope.contato = new Contato();
				$scope.mensagem = {texto: 'Salvo com sucesso'};
				
			})
			.catch(function(erro){
				$scope.mensagem = {texto: 'Não foi possível salvar.'}
			});
	};

	
});