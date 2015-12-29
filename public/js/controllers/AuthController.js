app.controller('AuthController', ['$scope', 'Auth', function($scope, Auth){
	$scope.login = function() {
	  Auth.login($scope.user).then(function(){
	    // $state.go('home');
	    console.log('Logged in. Needs to redirect to home page')
	  });
	};

	$scope.register = function() {
	  Auth.register($scope.user).then(function(){
	    // $state.go('home');
	    console.log('Logged in. Needs to redirect to home page')
	  });
	};

	$scope.hello = function(){
		console.log('Hello Function!')
	}
}]);

