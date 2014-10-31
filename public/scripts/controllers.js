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
    $scope.events = [
      {
        'name': 'Mixed Drinks at Roosters 6pm tomorrow'
      }, {
        'name': 'Wine Flights at Vino X 8pm Tuesday'
      }, {
        'name': 'Craft Beer Tasting at Mad Tree Brewers 6pm Friday'
      }
    ]
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
