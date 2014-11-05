'use strict';

angular.module('tedxUofT2015App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'LocalStorageModule'
])

.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])


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
	  .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideoCtrl'
      })
	  .when('/nomination', {
        templateUrl: 'views/nomination.html',
        controller: 'NominationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
