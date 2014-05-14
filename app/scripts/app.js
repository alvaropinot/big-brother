'use strict';

angular
  .module('bigBrotherApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tajo/:tajoId', {
        templateUrl: 'views/tajo.html',
        controller: 'TajoCtrl'
      })
      .when('/tajo', {
        templateUrl: 'views/tajo.html',
        controller: 'TajoCtrl'
      })
      .when('/personas', {
        templateUrl: 'views/personas.html',
        controller: 'PersonasCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
