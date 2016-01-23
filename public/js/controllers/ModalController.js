app.controller('ModalController', ['$scope','$http', 'ModalService', '$cookies', function($scope, $http, ModalService, $cookies){

	$scope.showSignup = function() {
	    ModalService.showModal({
	        templateUrl: '../../components/signup.html',
	        controller: "RegistrationController"
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
	        controller: "SigninController"
	    }).then(function(modal) {
	    	
	        modal.element.modal();
	        modal.close.then(function(result) {
	        	console.log(result)
	            $scope.message = "You said " + result; //need to update
	        });
	    });
	};

	$scope.logOut = function(){
		$http.delete('/sessions/1').success(function(response){
			$cookies.remove("status");
			$("#login").css("display", "block")
			$("#register").css("display", "block")
			$("#logout").css("display", "none")
			$("#results").css("display", "none")
			$(".loginlogout").find('a').first().html('Login/Register')
		})
	}


}])




