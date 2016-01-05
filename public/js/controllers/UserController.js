app.controller('UserController', ['$scope','close', function($scope, close){

	$scope.dismissModal = function(result) {
	   close(result, 200); // close, but give 200ms for bootstrap to animate
	};

}])


