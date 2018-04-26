(function () {
    var headersController = myShopApp.controller('headersController', ['$filter', '$interval', 'cartService', '$uibModal', '$scope', '$rootScope', function ($filter, $interval, cartService, $uibModal, $scope, $rootScope) {
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

        vm.getCategories = function () {
            vm.categories = [{
                "CategoryId": 1,
                "Name": "Beverages"
            }, {
                "CategoryId": 2,
                "Name": "Dairy Products"
            }, {
                "CategoryId": 3,
                "Name": "FromPostman"
            }, {
                "CategoryId": 4,
                "Name": "FromPostman"
            }];
        }
        
        vm.getSubcategoriesByCategoryId = function (categoryId) {
            vm.subCategories = [{
                "SubCategoryId": 1,
                "Name": "Soft Drink",
                "CategoryId": 1
            }, {
                "SubCategoryId": 2,
                "Name": "Energy Drink",
                "CategoryId": 1
            }, {
                "SubCategoryId": 3,
                "Name": "Salted Lassi",
                "CategoryId": 2
            }, {
                "SubCategoryId": 4,
                "Name": "Milk",
                "CategoryId": 2
            }, {
                "SubCategoryId": 5,
                "Name": "Soft Drink from Post",
                "CategoryId": 1
            }];
            vm.subcategoriesByCategoryId = $filter('filter')(vm.subCategories, { CategoryId: categoryId }, true);
        }
        vm.brands = [
            {
                "BrandId": 1,
                "Name": "Coalgate"
            },
            {
                "BrandId": 2,
                "Name": "Gillete"
            },
            {
                "BrandId": 3,
                "Name": "Coke"
            },
            {
                "BrandId": 4,
                "Name": "Pepsi"
            },
            {
                "BrandId": 5,
                "Name": "Vita"
            },
            {
                "BrandId": 6,
                "Name": "Mother Dairy"
            },
            {
                "BrandId": 7,
                "Name": "Bolt"
            },
            {
                "BrandId": 8,
                "Name": "Cool Energy"
            }
        ];
        vm.showmouseover = function () {
            console.log("down.");
        }
//        vm.getSubcategoriesByCategoryId();
        vm.getCategories();

    }]);
})();