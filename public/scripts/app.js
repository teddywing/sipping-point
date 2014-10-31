'use strict';


// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngRoute',
  'app.controllers'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
      })
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      })
      .when('/new-event', {
        templateUrl: 'partials/new.html',
        controller: 'newController'
      })
      .when('/event', {
        templateUrl: 'partials/event.html',
        controller: 'eventController'
      }).otherwise({
        redirectTo: '/'
      });
  }]);
