'use strict';
angular
    .module('pizzaApp')
    .controller('BasketCtrl', BasketCtrl);
//зависимости подключаем
BasketCtrl.$inject = ['ProductsService', '$rootScope', 'BasketService','$uibModal'];
function BasketCtrl(ProductsService, $rootScope, BasketService,$uibModal) {
    var pz = this;
    //модель с продуктами
    pz.products = [];
    //итоговая сумма
    pz.total = 0;
    var basket = BasketService;
    basket.RestoreState();
    //получаем из хранилища браузера все продукты из корзины
    var products = basket.model;
    //если продукты не пустые, то выводим их в корзине
    if (products.length != 0) {
        pz.empty = false;
        pz.products = products;
    } else {
    //если пустая то выводится в представлении соответстующее сообщение
        pz.empty = true;
    }

    //функция удаления товара из корзины на вход получает продукт
    pz.removeFromCart = function (product) {
    //тут ищем продукт в хранилище браузера и как находим удаляем
        for (var i = 0; i < pz.products.length; i++) {
            if (pz.products[i].id == product.id) {
            //если нашли - удаляем
                pz.products.splice(i, i + 1);
                basket.model = pz.products;
                basket.SaveState();
                pz.total -= product.number * product.cost;
                break;
            }
        }
        alert("Successful");
        if(pz.products.length == 0) {
            pz.empty = true;
        }
    }
    //функция покупки товара, открывает модальное окно
    pz.checkout = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/checkout.html',
            controller: 'CheckoutCtrl',
            controllerAs: 'pz'
        });
    }
}
