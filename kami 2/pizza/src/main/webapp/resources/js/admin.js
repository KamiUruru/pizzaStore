'use strict';

/* App Module */

var pizzaApp = angular.module('pizzaApp', [
    'ngRoute',
    'ui.bootstrap'
]);

pizzaApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/admin/index.html',
            controller: 'AdminCtrl',
            controllerAs: 'pz'
        }).when('/orders', {
            templateUrl: 'partials/admin/orders.html',
            controller: 'OrdersCtrl',
            controllerAs: 'pz'
        }).otherwise({
            templateUrl: 'partials/404.html'
        });
    }]);
