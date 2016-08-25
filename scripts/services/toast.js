'use strict';

/**
 * @ngdoc service
 * @name problemSetApp.toast
 * @description
 * # toast
 * Factory in the problemSetApp.
 */
angular.module('problemSetApp')
  .factory('toast', function($mdToast) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    return {
      show: function(info, theme) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(info)
          .theme(theme)
        );
      },

    };
  });
