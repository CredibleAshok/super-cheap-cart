(function () {
    var filtersController = myShopApp.controller('filtersController', function () {
        var vm = this;
        vm.brandsItem = 1225;
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
        vm.categories = [
            {
                "CategoryId": 1,
                "Name": "Beverages"
            },
            {
                "CategoryId": 2,
                "Name": "Dairy Products"
            },
            {
                "CategoryId": 3,
                "Name": "FromPostman"
            },
            {
                "CategoryId": 4,
                "Name": "FromPostman"
            }
        ];
        vm.subCategories = [
            {
                "SubCategoryId": 1,
                "Name": "Soft Drink",
                "CategoryId": 1
            },
            {
                "SubCategoryId": 2,
                "Name": "Energy Drink",
                "CategoryId": 1
            },
            {
                "SubCategoryId": 3,
                "Name": "Salted Lassi",
                "CategoryId": 2
            },
            {
                "SubCategoryId": 4,
                "Name": "Milk",
                "CategoryId": 2
            },
            {
                "SubCategoryId": 5,
                "Name": "Soft Drink from Post",
                "CategoryId": 1
            }
        ];
        vm.packageTypes = [
            {
                "PackageTypeId": 1,
                "Name": "Can"
            },
            {
                "PackageTypeId": 2,
                "Name": "Bottle"
            },
            {
                "PackageTypeId": 3,
                "Name": "Wrap"
            }
        ];
        vm.packageSizes = [
            {
                "PackageSizeId": 1,
                "Name": "100gm - 200gm"
            },
            {
                "PackageSizeId": 2,
                "Name": "200gm - 300gm"
            }
        ];
        vm.deliveryTypes = [
            {
                "DeliveryTypeId": 1,
                "Name": "Standard"
            },
            {
                "DeliveryTypeId": 2,
                "Name": "Express"
            }
        ];
    });
})();