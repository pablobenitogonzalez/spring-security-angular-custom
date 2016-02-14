(function() {
  'use strict';

  angular
    .module('ui')
    .controller('navigation', NavigationController);

  /** @ngInject */
  function NavigationController($rootScope, $scope, $http, $location, $route) {

    $scope.tab = function(route) {
      return $route.current && route === $route.current.controller;
    };

    $http.get('user').success(function(data) {
      if (data.name) {
        $rootScope.authenticated = true;
      } else {
        $rootScope.authenticated = false;
      }
    }).error(function() {
      $rootScope.authenticated = false;
    });

    $scope.credentials = {};

    $scope.logout = function() {
      $http.post('logout', {}).success(function() {
        console.log("Logout succeeded");
        $rootScope.authenticated = false;
        $location.path("/");
      }).error(function(data) {
        console.log("Logout failed");
        $rootScope.authenticated = false;
      });
    }

    $scope.login = function() {
      $http.get('login').success(function() {
        console.log("Login succeeded");
      }).error(function() {
        console.log("Login failed");
      });
    }

  }
})();
