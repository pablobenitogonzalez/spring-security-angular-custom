(function() {
  'use strict';

  angular
    .module('ui')
    .controller('home', HomeController);

  /** @ngInject */
  function HomeController($scope, $http) {
    $http.get('http://localhost:9000/api/resource').success(function(data) {
      $scope.greeting = data;
    });
  }
})();
