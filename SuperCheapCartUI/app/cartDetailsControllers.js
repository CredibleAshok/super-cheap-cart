(function () {
    var cartController = myShopApp.controller('cartController', ['$rootScope', 'cartService', '$scope', '$uibModal', function ($rootScope, cartService, $scope,$uibModal) {
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
        vm.proceedToCheckout = function () {
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            //modalScope.modeName = modeName; //pass anything to modal scope from this.
            var modalOptions = {
                templateUrl: 'app/checkout.html',
                scope: modalScope,
                keyboard: true,
                windowClass: 'wide-modal',
                backdrop: 'static',
                resolve: {
                    viewMode: function () {
                        return 'New';
                    }
                }
            };
            modalScope.modalInstance = $uibModal.open(modalOptions);
            modalScope.modalInstance.result.then(function (data) {
                // Returned from modal, so required nothing from the closed modal.
            }, function () {
                // Cancelled.
            })['finally'](function () {
                modalScope.modalInstance = undefined  // <--- This fixes
            });
        }
        vm.getTotalCartPrice();
    }]);
})();