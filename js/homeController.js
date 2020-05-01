/**
 * @license AngularJS v1.7.8
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window) {'use strict';

/* exported
  minErrConfig,
  errorHandlingConfig,
  isValidObjectMaxDepth
*/
var app = angular.module('myApp');
 
  app.controller('HomeController', 
  function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.user = $rootScope.userName;
    
  });