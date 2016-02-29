angular.module('forinlanguages.login', [])

.controller('loginController', function($scope,$state, $http) {
  $scope.test = 'login';
  $scope.credentials = {};
  $scope.badLogin = false;
  $scope.loading = false;
  $scope.load = function() {
    $scope.loading = true;
  }
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
      console.log('error');
      $scope.badLogin = true;
      $scope.loading = false;
    });
  };

  $scope.isEnter = function(envent, func, arg){
    console.log("listening to keys");
    if(envent.keyCode===13){
      func.apply(null, arg);
    }
  }

});