var app = angular.module('app',['']);
// var app = angular.module('app',['controllers']);

// var MainController = function($scope) {
// 	$scope.val = "test123"
// 	$scope.func = function(){
// 		return "abc" + "def"
// 	}
// }

app.controller('MainController', function($scope){
	$scope.val = "test456"
})

// angular.module('controllers', []).controller('MainController', function($scope){
// 	$scope.val = "test789"
// })