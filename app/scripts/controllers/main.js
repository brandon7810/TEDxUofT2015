'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', function ($scope,$window) {
	
	//Scroll To Top
	$window.scrollTo(0,0);
	
    $scope.overlayMenuClick = function(){
		$('#close_overlay').click();
	};
	
});
  
