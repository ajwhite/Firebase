(function () {
  'use strict';

  angular.module('firebaseApp').factory('RealtimeCursor', function ($firebase) {
    return function () {
      var ref = new Firebase('https://radiant-fire-5521.firebaseio.com/cursor');
      return $firebase(ref).$asObject();
    }
  });
})();
