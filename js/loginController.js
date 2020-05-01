 var app = angular.module('myApp');
 app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $rootScope.userName = $scope.username;
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Plz contect to Admin or pass Admin ID as username/password !";
      }   
    };    
  });