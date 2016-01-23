app.controller('RegistrationController', ['$scope','close', '$http', '$cookies', function($scope, close, $http, $cookies){

	$scope.dismissModal = function(result) {
	   close(result, 200); // close, but give 200ms for bootstrap to animate
	};

	$scope.register = function(result){
		$http.post('/users', result).success(function(response){
			console.log(response.email)
			$cookies.put('status', 'true')
			$(".loginlogout").find('a').first().html(response['email'])
			$("#login").css("display", "none")
			$("#register").css("display", "none")
			$("#results").css("display", "block")
		})
		.error(function(response){
			console.log(response)
		})
	}
}])


