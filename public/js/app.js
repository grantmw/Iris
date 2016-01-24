var app = angular.module('app', ['ngRoute', 'angularModalService', 'ngCookies']);

app.config(function ($routeProvider){ $routeProvider
	.when('/results',{
		controller: 'ResultsController',
		templateUrl: '../components/results.html'
	})
	.when('/test',{
		controller: 'MainController',
		templateUrl: '../components/input.html'
	})
	.when('/:wildcard',{
		controller: 'LandingController',
		templateUrl: '../components/landing.html'
	})
	.when('/',{
		controller: 'LandingController',
		templateUrl: '../components/landing.html'
	})



})

