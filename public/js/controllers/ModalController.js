app.controller('ModalController', ['$scope','$http', 'ModalService', function($scope, $http, ModalService){

	$scope.showSignup = function() {
	    ModalService.showModal({
	        templateUrl: '../../components/signup.html',
	        controller: "UserController"
	    }).then(function(modal) {
	        modal.element.modal();
	        modal.close.then(function(result) {
	        	console.log(result)
	            $scope.message = "You said " + result; //need to update
	        });
	    });
	};

	$scope.showLogin = function() {
	    ModalService.showModal({
	        templateUrl: '../../components/login.html',
	        controller: "UserController"
	    }).then(function(modal) {
	        modal.element.modal();
	        modal.close.then(function(result) {
	        	console.log(result)
	            $scope.message = "You said " + result; //need to update
	        });
	    });
	};


}])




