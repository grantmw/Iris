 app.controller('ModalController', ['$scope','$http', 'ModalService', '$cookies', '$location', function($scope, $http, ModalService, $cookies, $location){
	//set array of saved tests for profile view
	$scope.userResults = $cookies.getObject('results')

	$scope.navBarLink = "Login/Register"

	if($cookies.get('email')){
		$scope.navBarLink = $cookies.get('email')
	}

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
			$cookies.remove("loggedin");
			$cookies.remove("email");
			$cookies.remove("results");
			$("#login").css("display", "block")
			$("#register").css("display", "block")
			$("#logout").css("display", "none")
			$("#results").css("display", "none")
			$(".loginlogout").find('a').first().html('Login/Register')
		})
	}

}])




