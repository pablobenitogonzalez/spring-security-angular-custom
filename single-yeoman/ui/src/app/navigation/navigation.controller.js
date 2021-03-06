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

    var authenticate = function(credentials, callback) {

      var headers = credentials ? {
        authorization : "Basic " + btoa(credentials.username + ":" + credentials.password)
      } : {};

      $http.get('/api/user', {
        headers : headers
      }).success(function(data) {
        if (data.name) {
          $rootScope.authenticated = true;
        } else {
          $rootScope.authenticated = false;
        }
        callback && callback($rootScope.authenticated);
      }).error(function() {
        $rootScope.authenticated = false;
        callback && callback(false);
      });

    };

    authenticate();

    $scope.credentials = {};
    $scope.login = function() {
      authenticate($scope.credentials, function(authenticated) {
        if (authenticated) {
          console.log("Login succeeded");
          $location.path("/");
          $scope.error = false;
          $rootScope.authenticated = true;
        } else {
          console.log("Login failed");
          $location.path("/login");
          $scope.error = true;
          $rootScope.authenticated = false;
        }
      });
    };

    $scope.logout = function() {
      $http.post('/api/logout', {}).success(function() {
        console.log("Logout succeeded");
        $rootScope.authenticated = false;
        $location.path("/");
      }).error(function(data) {
        console.log("Logout failed");
        $rootScope.authenticated = false;
      });
    };

  }
})();
