(function() {
  'use strict';

  angular
    .module('ui')
    .controller('home', HomeController);

  /** @ngInject */
  function HomeController($scope, $http) {
    $http.get('api/resource/hello').success(function(data) {
      $scope.greeting = data;
    })
  }
})();
