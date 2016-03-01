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
    if ($scope.newUser.signupUN.length < 4 || $scope.newUser.signupPW.length < 5) {
      console.log('nah');
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

$scope.isEnter = function(envent, func, arg){
    console.log("listening to keys");
    if(envent.keyCode===13){
      func.apply(null, arg);
    }
  }

});
