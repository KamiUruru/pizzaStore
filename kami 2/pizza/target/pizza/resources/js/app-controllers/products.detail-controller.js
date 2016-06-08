'use strict';
angular
    .module('pizzaApp')
    .controller('ProductDetailCtrl', ProductDetailCtrl);

ProductDetailCtrl.$inject = ['ProductsService', '$routeParams', 'BasketService'];
function ProductDetailCtrl(ProductsService, $routeParams, BasketService) {

    var pz = this;
    pz.id = $routeParams.id;

    pz.product = null;

    //получаем детали продукта по id
    ProductsService.GetProductDetail(pz.id).success(function (data) {
        pz.product = data;
    })
    //добавление в корзину, то есть в локальное хранилище браузера
    pz.addToCart = function (number) {
        var product = pz.product;
        var basket = BasketService;
        basket.RestoreState();
        var products = basket.model;
        if (products != undefined) {
            console.log(products.length);
            var isFind = false;
            for (var i = 0; i < products.length; i++) {
                if (products[i].id == product.id) {
                    products[i].number = products[i].number + number;
                    isFind = true;
                    break;
                }
            }
            if (!isFind) {
                product.number = number;
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
