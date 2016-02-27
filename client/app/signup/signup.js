angular.module('forinlanguages.signup', [])

.controller('signupController', function($scope,$state) {
  $scope.test = 'signup'
  $scope.signup = function(){
    console.log('signup and login and go to main page');
    $state.go('main');
  }
})