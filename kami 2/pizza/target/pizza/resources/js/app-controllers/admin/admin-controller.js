'use strict';
angular
    .module('pizzaApp')
    .controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['AdminService', '$rootScope',];
function AdminCtrl(AdminService, $rootScope) {
    var pz = this;
    pz.product = {
        description: null,
        name: null,
        cost: 0,
        image: null,
        category: null
    }
    //добавление продукта на сервер
    pz.addProduct = function () {
        AdminService.AddProduct(pz.product).success(function () {
            pz.product.description = "";
            pz.product.name = "";
            pz.product.cost = 0;
            pz.product.image = "";
            pz.product.category = "PIZZA";
        })
    }

}
