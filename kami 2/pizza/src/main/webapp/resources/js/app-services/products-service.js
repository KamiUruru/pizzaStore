'use strict';
angular
    .module('pizzaApp')
    .factory('ProductsService', ProductsService);
ProductsService.$inject = ['$http'];
function ProductsService($http) {
    var service = {};

    service.GetProducts = GetProducts;
    service.GetProductDetail = GetProductDetail;
    service.Checkout = Checkout;

    return service;

    function GetProducts() {
        return $http.get('/api/products');
    }

    function GetProductDetail(id) {
        return $http.get('/api/products/' + id);
    }

    function Checkout(checkout) {
        return $http.post('/api/checkout',checkout);
    }

}
