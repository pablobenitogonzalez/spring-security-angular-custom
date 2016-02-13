(function() {
  'use strict';

  angular
    .module('ui')
    .config(routeConfig);

  function routeConfig($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl : 'app/home/home.html',
      controller : 'home'
    }).otherwise('/');

  }

})();
