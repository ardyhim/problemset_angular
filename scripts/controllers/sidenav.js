'use strict';

/**
 * @ngdoc function
 * @name problemSetApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the problemSetApp
 */
angular.module('problemSetApp')
  .controller('SidenavCtrl', function($mdSidenav, $log, $timeout, $mdDialog, $scope, Auth, $window, $location) {
    $scope.auth = Auth;

    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.tambahContact = function(ev) {
      $mdDialog.show({
          templateUrl: 'views/tambahContact.html',
          controller: 'tambahContact',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    $scope.logout = function(){
      Auth.setUser(null);
      delete $window.sessionStorage.token;
      delete $window.sessionStorage.username;
      $location.path('/');
    };
  });
