'use strict';
angular
    .module('pizzaApp')
    .controller('ProductsCtrl', ProductsCtrl);

ProductsCtrl.$inject = ['ProductsService', 'BasketService'];
function ProductsCtrl(ProductsService, BasketService) {
    var pz = this;

    pz.activeTab = 1;

    pz.products = [];

    //получаем все продукты с сервера
    ProductsService.GetProducts().success(function (data) {
        pz.products = data;
    })

    //добавление в корзину
    pz.addToCart = function (product) {
        var basket = BasketService;
        basket.RestoreState();
        var products = basket.model;
        if (products != undefined) {
            console.log(products.length);
            var isFind = false;
            for (var i = 0; i < products.length; i++) {
                if (products[i].id == product.id) {
                    products[i].number = products[i].number + 1;
                    isFind = true;
                    break;
                }
            }
            if (!isFind) {
                product.number = 1;
                products.push(product);
            }
        } else {
            products = [];
            product.number = 1;
            products.push(product);
        }
        basket.model = products;
        basket.SaveState();
        alert("Successful")
    }
}
