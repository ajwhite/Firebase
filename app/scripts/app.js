'use strict';

angular
  .module('firebaseApp', [
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/draggable', {
        templateUrl: 'views/firebase.html',
        controller: 'FirebaseCtrl'
      })
      .when('/collision', {
        templateUrl: 'views/collisions.html',
        controller: 'FirebaseCtrl'
      })
      .otherwise({
        redirectTo: '/collision'
      });
  });
