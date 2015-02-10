'use strict';

/**
 * @ngdoc function
 * @name tedxUofT2015App.controller:ConferenceCtrl
 * @description
 * # ConferenceCtrl
 * Controller of the tedxUofT2015App
 */
angular.module('tedxUofT2015App')
  .controller('ConferenceCtrl', function ($scope,$rootScope) {
	$scope.oneAtATime = true;
	 
	$rootScope.socialMedia.show = true;
	$rootScope.mailingList.show = true;
	
	$('#trigger-overlay').show();
  });
