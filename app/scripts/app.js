'use strict';

angular.module('tedxUofT2015App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })      
	  .when('/speakers', {
        templateUrl: 'views/speakers.html',
        controller: 'MainCtrl'
      })
	  .when('/conference', {
        templateUrl: 'views/conference.html',
        controller: 'MainCtrl'
      })
      .when('/speakers', {
        templateUrl: 'views/speakers.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
