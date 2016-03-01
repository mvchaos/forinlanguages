angular.module('forinlanguages.signup', [])

.controller('signupController', function($scope, $state, $http) {
  $scope.test = 'signup'
  $scope.alreadyRegistered = false;
  $scope.passMatch = false;
  $scope.newUser = {};
  $scope.badLength = false;
  $scope.signup = function() {
    //handle new user submit
    if ($scope.newUser.signupPW !== $scope.passwordTwo) {
      $scope.passMatch = true;
    }
    if ($scope.newUser.signupPW.length > 15 || $scope.newUser.signupPW.length < 5) {
      $scope.badLength = true;
    }
    else {
    $scope.badLength = false;
    $scope.passMatch = false;
    return $http({
      method: 'POST',
      url: '/register/newuser',
      data: $scope.newUser
    }).then(function(response) {
      $state.go('main');
    })
    .catch(function(err) {
      $scope.alreadyRegistered = true;
    });
  };
};
});
