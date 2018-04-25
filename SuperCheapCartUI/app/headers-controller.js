(function () {
    var headersController = myShopApp.controller('headersController', ['$interval', 'cartService', '$uibModal', '$scope', '$rootScope', function ($interval, cartService, $uibModal, $scope, $rootScope) {
        var vm = this;
        vm.myitem = 10;
        var mytimeout = $interval(function () { vm.numberOfItemsInCart = cartService.getItemCountInCart(); }, 1000);
        vm.showCart = function (modeName) {
            //open the forgot or create password modal.
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            modalScope.modeName = modeName; //pass anything to modal scope from this.
            var modalOptions = {
                templateUrl: 'app/cartDetails.html',
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
    }]);
})();