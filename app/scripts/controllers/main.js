'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', function ($scope) {
	
    $scope.closeOverlay = function(){
		$('#close_overlay').click();
	};
	
});
  
