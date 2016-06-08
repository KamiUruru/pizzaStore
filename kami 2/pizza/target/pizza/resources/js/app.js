'use strict';

/* App Module */

var pizzaApp = angular.module('pizzaApp', [
    'ngRoute',
    'ui.bootstrap'
]);

pizzaApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html',
            controller: 'MainCtrl',
            controllerAs: 'pz'
        }).when('/products', {
            templateUrl: 'partials/products.html',
            controller: 'ProductsCtrl',
            controllerAs: 'pz'
        }).when('/products/:id', {
            templateUrl: 'partials/product-single.html',
            controller: 'ProductDetailCtrl',
            controllerAs: 'pz'
        }).when('/cart', {
            templateUrl: 'partials/cart.html',
            controller: 'BasketCtrl',
            controllerAs: 'pz'
        }).when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'pz'
        }).otherwise({
            templateUrl: 'partials/404.html'
        });
    }]);

//сервис для получения и сохранение данных в локальное хранилище браузера, для корзины
pizzaApp.factory('BasketService', ['$rootScope', function ($rootScope) {
    var service = {
        model: [],

        SaveState: function () {
            sessionStorage.products = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.products);
        }
    }

    $rootScope.$on("saveState", service.SaveState);
    $rootScope.$on("restoreState", service.RestoreState);
    return service;
}]);