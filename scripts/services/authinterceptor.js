'use strict';

/**
 * @ngdoc service
 * @name problemSetApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the problemSetApp.
 */
angular.module('problemSetApp')
  .factory('authInterceptor', function ($rootScope, $q, $window, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
          config.headers.token = $window.sessionStorage.token;
        }
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          $location.path('/');
        }
        return response || $q.when(response);
      }
    };
  });
