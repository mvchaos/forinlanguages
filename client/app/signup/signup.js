angular.module('forinlanguages.signup', [])

.controller('signupController', function($scope, $state, $http) {
  $scope.test = 'signup'
  $scope.alreadyRegistered = false;
  $scope.passMatch = false;
  $scope.newUser = {};
  $scope.signup = function() {
    //handle new user submit
    if ($scope.newUser.signupPW !== $scope.passwordTwo) {
      $scope.passMatch = true;
    }
    else {
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
