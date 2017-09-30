'use strict';

/**
 * @ngdoc overview
 * @name xyzApp
 * @description
 * # xyzApp
 *
 * Main module of the application.
 */
angular
  .module('xyzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/manual.html',
        controller: 'PlayCtrl',
        controllerAs: 'manual'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl',
        controllerAs: 'play'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
