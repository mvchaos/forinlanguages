angular.module('forinlanguages.signup', [])

.controller('signupController', function($scope,$state, $http) {
  $scope.test = 'signup'
  $scope.newUser = {};
  $scope.signup = function(){
     //handle new user submit
    return $http({
      method: 'POST',
      url: '/register/newuser',
      data: $scope.newUser
    }).then($state.go('main')
    );
  };

  });