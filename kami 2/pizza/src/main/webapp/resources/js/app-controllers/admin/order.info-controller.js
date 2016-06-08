'use strict';
angular
    .module('pizzaApp')
    .controller('OrderInfoCtrl', OrderInfoCtrl);
OrderInfoCtrl.$inject = ['$uibModalInstance', 'items'];
function OrderInfoCtrl($uibModalInstance, items) {
    var pz = this;
    pz.order = items;
    pz.ok = function () {
        $uibModalInstance.close();
    };

}
