'use strict';

/* Controllers */

angular.module('app.controllers', [])
  .controller('loginController',
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.title='Login'
  }])
  .controller('homeController',
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.title='Home'
  }])
  .controller('newController',
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.title='New Event'

    window.setTimeout(function(){
      console.log('calling');
      $http.get('https://graph.facebook.com/v2.2/'
        + AUTH.userID + '/friends?access_token='
        + AUTH.accessToken
        + '&format=json&method=get&pretty=0&suppress_http_code=1')
        .success(
        function(data) {
          console.log(data);
          $scope.friends = data.data;
        }
      );
    }, 3000);
  }])
  .controller('eventController',
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.title='Event'
  }])
