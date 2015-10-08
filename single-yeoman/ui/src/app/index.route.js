(function() {
  'use strict';

  angular
    .module('ui')
    .config(routeConfig);

  function routeConfig($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'home'
    }).when('/login', {
      templateUrl : 'login.html',
      controller : 'navigation'
    }).otherwise('/');

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }

})();
