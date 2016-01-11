// MeasyOne 
// Agngular Routes and Animation
//  Create a login App with Angular JS
var myApp = angular.module('myApp', ['ngRoute']);

// Controller - USE ng-controller= appController in HTML
// myApp.controller('appController', ['$scope',function($scope) {
// 	$scope.message = "Welcome MeasyOne to our Application";
// }]);

// Routing
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/success', {
			templateUrl: 'views/success.html',
			controller: 'SuccessController'
		}).
		otherwise({ // Default Route
			redirectTo: '/login'
		});
}]);