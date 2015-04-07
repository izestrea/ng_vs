var app = angular.module('app',[]);
// var app = angular.module('app',['controllers']);

// var MainController = function($scope) {
// 	$scope.val = "test123"
// 	$scope.func = function(){
// 		return "abc" + "def"
// 	}
// }

app.controller('MainController', function($scope){
	// $scope.val = "test456"
	$scope.val  = 1
	$scope.even = false

	$scope.inc = function(){
		$scope.val += 1
		$scope.even = $scope.val % 2 == 0
	}
	// $scope.isEven = function(){
		// return $scope.val % 2 == 0
	// }
})

// angular.module('controllers', []).controller('MainController', function($scope){
// 	$scope.val = "test789"
// })