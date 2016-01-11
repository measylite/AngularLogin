myApp.controller('RegistrationController' , ['$scope' , function($scope) {
	
	// LogIn Method to handle our myform submit 
	$scope.login = function() {
		$scope.message = "Welcome, " + $scope.user.email + "!";
	};

	// Register Method to handle our myform submit 
	$scope.register = function() {
		$scope.message = "Greetings, " + $scope.user.firstname + ".";
	};
}]);  // {{Call "message" on HTML page}}