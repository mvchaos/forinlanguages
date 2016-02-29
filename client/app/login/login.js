angular.module('forinlanguages.login', [])

.controller('loginController', function($scope,$state, $http) {
  $scope.test = 'login';
  $scope.credentials = {};
  $scope.badLogin = false;
  $scope.login = function(){
  //handle login request
    return $http({
      method: 'POST',
      url: '/register/signin',
      data: $scope.credentials
    }).then(function(response) {
      $state.go('main');
    })
    .catch(function(err) {
      $scope.badLogin = true;
    });
  };

  $scope.isEnter = function(envent, func, arg){
    console.log("listening to keys");
    if(envent.keyCode===13){
      func.apply(null, arg);
    }
  }

});