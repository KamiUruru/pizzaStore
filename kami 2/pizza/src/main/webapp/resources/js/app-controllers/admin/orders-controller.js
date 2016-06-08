'use strict';
angular
    .module('pizzaApp')
    .controller('OrdersCtrl', OrdersCtrl);

OrdersCtrl.$inject = ['AdminService', '$uibModal'];
function OrdersCtrl(AdminService, $uibModal) {
    var pz = this;
    pz.orders = [];
    AdminService.GetOrders().success(function (data) {
        pz.orders = data;
    })

    pz.orderInfo = function (order) {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/admin/order-info.html',
            controller: 'OrderInfoCtrl',
            resolve: {
                items: function () {
                    return order;
                }
            },
            controllerAs: 'pz',

        });
    }
}
