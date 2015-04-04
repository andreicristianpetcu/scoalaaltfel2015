'use strict';

/**
 * @ngdoc overview
 * @name scoalaaltfel2015App
 * @description
 * # scoalaaltfel2015App
 *
 * Main module of the application.
 */
angular
  .module('scoalaaltfel2015App', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/elevi', {
        templateUrl: 'views/elevi.html',
        controller: 'EleviCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
