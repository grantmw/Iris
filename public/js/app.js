var app = angular.module('app', ['ngRoute', 'Devise']);

app.config(function ($routeProvider){ $routeProvider
	.when('/',{
		controller: 'MainController',
		templateUrl: '../components/input.html'
	})
	.when('/login',{
		controller: 'AuthController',
		templateUrl: '../views/login.html'
	})
	.when('/register',{
		controller: 'AuthController',
		templateUrl: '../views/register.html'
	})
})

app.config(function(AuthProvider) {
    // Configure Auth service with AuthProvider
})