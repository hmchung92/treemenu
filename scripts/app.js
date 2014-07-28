'use strict';

angular.module('mcTreeMenu', [
  'ui.mcTreeMenu.controller',
  'ui.mcTreeMenu.services',
  'ui.mcTreeMenu.directive'
]);

angular.module('task4App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'jm.i18next'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$i18nextProvider',function ($i18nextProvider) {
    $i18nextProvider.options = {
      lng: 'en-us',
      useCookie: false,
      useLocalStorage: false,
      resGetPath: '../locales/__lng__/__ns__.json'
    };
  }])
;

