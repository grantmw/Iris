var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){ $routeProvider
	.when('/test',{
		controller: 'MainController',
		templateUrl: '../components/input.html'
	})
	.when('/',{
		controller: 'LandingController',
		templateUrl: '../components/landing.html'
	})

})