'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', ["$scope", "$window", "$http", function ($scope,$window,$http) {
	
	//Scroll To Top
	$window.scrollTo(0,0);
	
	
	
	//Close the overlay menu
    $scope.overlayMenuClick = function(){
		$('#close_overlay').click();
		//Refresh page
		location.reload();
	};
	
	
}]);