(function () {
  'use strict';
  angular.module('firebaseApp').factory('MyFirebase', function ($firebase) {
    var url = 'https://radiant-fire-5521.firebaseio.com/';
    return function (endpoint) {
      endpoint = endpoint || '';
      var ref = new Firebase(url + endpoint);

      return {
        ref: ref,
        obj: $firebase(ref).$asObject()
      };
    }
  });
})();
