var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){ $routeProvider
	.when('/',{
		controller: 'MainController',
		templateUrl: '../components/input.html'
	})
})