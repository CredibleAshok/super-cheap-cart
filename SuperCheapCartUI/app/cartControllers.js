(function () {
    var cartController = myShopApp.controller('cartController', ['cartService', '$scope', '$uibModal', function (cartService, $scope,$uibModal) {
        var vm = this;
        vm.myitem = 10;
        vm.totalCartPrice = 0;
        vm.currencyCode = "$";
        vm.allItemsInCart = cartService.getAllItemsInCart();
        vm.addProductQuantity = function (product) {
            product.Quantity += 1;
            product.totalAmt = (product.Price * product.Quantity);
            vm.totalCartPrice += product.Price;
        }
        vm.removeProductQuantity = function (product) {
            if (product.Quantity > 1) {
                product.Quantity -= 1;
                product.totalAmt = (product.Price * product.Quantity);
                vm.totalCartPrice -= product.Price;
            } 
        }
        vm.getTotalCartPrice = function () {
            angular.forEach(vm.allItemsInCart, function (product) {
                vm.totalCartPrice += product.Price;
            });
        }
        vm.closeModal = function () {
            $scope.modalInstance.close();
        }
        vm.getTotalCartPrice();
    }]);
})();