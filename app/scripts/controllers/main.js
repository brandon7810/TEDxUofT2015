'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', ["$scope", "$window", function ($scope,$window) {
	
	//Scroll To Top
	$window.scrollTo(0,0);
	
	//Close the overlay menu
    $scope.overlayMenuClick = function(){
		$('#close_overlay').click();
	};
	
}]);