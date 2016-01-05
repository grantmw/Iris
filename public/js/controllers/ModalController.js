app.controller('ModalController', ['$scope','$http', 'ModalService', function($scope, $http, ModalService){

	$scope.show = function() {
	    ModalService.showModal({
	        templateUrl: '../../components/signup.html',
	        controller: "UserController"
	    }).then(function(modal) {
	        modal.element.modal();
	        modal.close.then(function(result) {
	            $scope.message = "You said " + result;
	        });
	    });
	};

	$scope.hello = function(){
		console.log("Hello from function")
	}

}])




