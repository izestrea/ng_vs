var app = angular.module('app',[]);
// var app = angular.module('app',['controllers']);

// var MainController = function($scope) {
// 	$scope.val = "test123"
// 	$scope.func = function(){
// 		return "abc" + "def"
// 	}
// }

app.controller('MainController', function($scope){
	$scope.ob = {name: "mike", age: 34, title: "Mr."}
	// $scope.array = [1, 2, 3, 4, 5, 5, 7, 8, 9]
	// $scope.users = [{name: "john", age: 32}, {name: "andy", age: 28}, {name: "sam", age: 23}, {name: "sam", age: 23}]
	// $scope.val = "test456"
	// $scope.val  = 1
	// $scope.even = false

	// $scope.inc = function(){
	// 	$scope.val += 1
	// 	$scope.even = $scope.val % 2 == 0
	// }
	// $scope.isEven = function(){
		// return $scope.val % 2 == 0
	// }
})

// angular.module('controllers', []).controller('MainController', function($scope){
// 	$scope.val = "test789"
// })