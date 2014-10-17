'use strict';

/**
 * @ngdoc directive
 * @name tedxUofT2015App.directive:backImg
 * @description
 * # backImg
 */

angular.module('tedxUofT2015App').directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
  