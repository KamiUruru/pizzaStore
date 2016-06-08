'use strict';
angular
    .module('pizzaApp')
    .controller('CheckoutCtrl', CheckoutCtrl);
CheckoutCtrl.$inject = ['ProductsService', 'BasketService', '$uibModalInstance', '$location'];
function CheckoutCtrl(ProductsService,  BasketService, $uibModalInstance, $location) {
    var pz = this;
    var basket = BasketService;
    basket.RestoreState();
    var productsLocalStorage = basket.model;

    var products = [];
    //добавляем продукты из корзины в модель products, в которой есть productId и количество продуктов
    for(var i = 0; i < productsLocalStorage.length; i++){
        products.push({
            productId: productsLocalStorage[i].id,
            number: productsLocalStorage[i].number
        });
    }
    pz.user = {
        name: null,
        phone: null,
        address: null
    }

    pz.checkout = {
        user: pz.user,
        products: products
    }
    //отправляем заказ на сервер
    pz.ok = function () {
        ProductsService.Checkout(pz.checkout).success(function() {
            basket.model = [];
            basket.SaveState();
            $location.path("/products");
            $uibModalInstance.close();
        })
    };

    pz.cancel = function () {
        $uibModalInstance.dismiss();
    };
}
