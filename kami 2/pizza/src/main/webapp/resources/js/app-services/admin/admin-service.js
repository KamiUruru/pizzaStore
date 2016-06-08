'use strict';
angular
    .module('pizzaApp')
    .factory('AdminService', AdminService);
AdminService.$inject = ['$http'];
function AdminService($http) {
    var service = {};

    service.GetOrders = GetOrders;
    service.AddProduct = AddProduct;

    return service;

    function GetOrders() {
        return $http.get('/admin/orders');
    }

    function AddProduct(product) {
        return $http.post('/admin/products/new', product);
    }
    


}
