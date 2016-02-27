angular.module('forinlanguages.login', [])

.controller('loginController', function($scope,$state) {
  $scope.test = 'login';
  $scope.login = function(){
    console.log("log in and go to main view");
    $state.go("main");
  }
})