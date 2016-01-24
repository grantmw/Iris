app.controller('RegistrationController', ['$scope','close', '$http', '$cookies', function($scope, close, $http, $cookies){

	$scope.email = ""
	$scope.password = ""

	$scope.dismissModal = function(result) {
	   close(result, 200); // close, but give 200ms for bootstrap to animate
	};

	$scope.register = function(result){

		var user = {
			email: $scope.email,
			password: $scope.password
		}

		$http.post('/users', user).success(function(response){
			console.log(response.email)
			$cookies.put('loggedin', 'true')
			$cookies.put('email', response['email'])
			$(".loginlogout").find('a').first().html(response['email'])
			$("#login").css("display", "none")
			$("#register").css("display", "none")
			$("#results").css("display", "block")
			$("#logout").css("display", "block")
		})
		.error(function(response){
			console.log(response)
		})
	}
}])


