(function () {
  'use strict';

  angular.module('firebaseApp').directive('windowOpen', function ($window, $location) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.on('click', function (e) {
          e.preventDefault();
          $window.open($location.absUrl(), 'firebaseDemo', 'height=500, width=800');
          return false;
        });
      }
    }
  });
})()
