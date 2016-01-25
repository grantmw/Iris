app.controller('SigninController', ['$scope','close', '$http', '$cookies', function($scope, close, $http, $cookies){

	$scope.email = ""
	$scope.password = ""

	$scope.dismissModal = function(result) {
	   close(result, 200); // close, but give 200ms for bootstrap to animate
	};

	$scope.signin = function(){
		var user = {
			"email": $scope.email,
			"password": $scope.password 
		}
		console.log(user)

		$http.post('/sessions', user).success(function(response){
			$cookies.put('loggedin', 'true')
			$cookies.put('email', response['user']['email'])
			$cookies.putObject('results', response['results']);
			$(".loginlogout").find('a').first().html(response['email'])
			$("#login").css("display", "none")
			$("#register").css("display", "none")
			$("#logout").css("display", "block")
			$("#results").css("display", "block")
		})
		.error(function(response){
			console.log("Failed")
		})
	}
}])


