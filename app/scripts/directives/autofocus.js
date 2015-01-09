'use strict';

/**
 * @ngdoc directive
 * @name tedxUofT2015App.directive:autoFocus
 * @description
 * # autoFocus
 */
angular.module('tedxUofT2015App')
  .directive('focusMe', function($timeout) {
  return {
    scope: { trigger: '=focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === true) { 
          //console.log('trigger',value);
          //$timeout(function() {
            element[0].focus();
            scope.trigger = false;
          //});
        }
      });
    }
  };
});