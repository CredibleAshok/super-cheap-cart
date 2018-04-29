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
                "Name": "100gm - 200gm",
                "selected": false
            },
            {
                "PackageSizeId": 2,
                "Name": "200gm - 300gm",
                "selected": false
            }
        ];
        vm.deliveryTypes = [
            {
                "DeliveryTypeId": 1,
                "Name": "Standard",
                "selected": false
            },
            {
                "DeliveryTypeId": 2,
                "Name": "Express",
                "selected": false
            }
        ];
        vm.productFilter = {};
        vm.productFilter.deliveryTypeFilter = [];
        vm.productFilter.packagesizeFilter = [];
        vm.productFilter.packageTypeFilter = [];
        vm.productFilter.subCategoryFilter = [];
        vm.productFilter.categoryFilter = [];
        vm.productFilter.brandFilter = [];

        vm.setProductsFilter = function (filterType, selectionType, filterId) {
            
            switch (filterType) {
                case "deliveryType": {
                    if (selectionType) {
                        vm.productFilter.deliveryTypeFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.deliveryTypeFilter.indexOf(filterId);
                        vm.productFilter.deliveryTypeFilter.splice(itemTobeRemoved,1);
                    }
                    break;
                }
                case "packageSize": {
                    if (selectionType) {
                        vm.productFilter.packagesizeFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.packagesizeFilter.indexOf(filterId);
                        vm.productFilter.packagesizeFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "packageType": {
                    if (selectionType) {
                        vm.productFilter.packageTypeFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.packageTypeFilter.indexOf(filterId);
                        vm.productFilter.packageTypeFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "subCategory": {
                    if (selectionType) {
                        vm.productFilter.subCategoryFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.subCategoryFilter.indexOf(filterId);
                        vm.productFilter.subCategoryFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "category": {
                    if (selectionType) {
                        vm.productFilter.categoryFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.categoryFilter.indexOf(filterId);
                        vm.productFilter.categoryFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "brand": {
                    if (selectionType) {
                        vm.productFilter.brandFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.brandFilter.indexOf(filterId);
                        vm.productFilter.brandFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "subCategory": {
                    if (selectionType) {
                        vm.productFilter.subCategoryFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.subCategoryFilter.indexOf(filterId);
                        vm.productFilter.subCategoryFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "category": {
                    if (selectionType) {
                        vm.productFilter.categoryFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.categoryFilter.indexOf(filterId);
                        vm.productFilter.categoryFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "brand": {
                    if (selectionType) {
                        vm.productFilter.brandFilter.push(filterId);
                    } else {
                        var itemTobeRemoved = vm.productFilter.brandFilter.indexOf(filterId);
                        vm.productFilter.brandFilter.splice(itemTobeRemoved, 1);
                    }
                    break;
                } case "priceRange": {
                    vm.productFilter.priceRangeMin = vm.priceRangeMin;
                    vm.productFilter.priceRangeMax = vm.priceRangeMax;
                    break;
                } 
                default:
                    console.log("default called.");
                    break;
            }
            vm.showFilterStatus(vm.productFilter);
        }

        vm.showFilterStatus = function (productFilter) {
            console.log("items in deliveryTypeFilter are:- " + productFilter.deliveryTypeFilter.length);
            console.log("items in packagesizeFilter are:- " + productFilter.packagesizeFilter.length);
            console.log("items in packageTypeFilter are:- " + productFilter.packageTypeFilter.length);
            console.log("items in subCategoryFilter are:- " + productFilter.subCategoryFilter.length);
            console.log("items in categoryFilter are:- " + productFilter.categoryFilter.length);
            console.log("items in brandFilter are:- " + productFilter.brandFilter.length);
            console.log("items in priceRangeMin are:- " + productFilter.priceRangeMin);
            console.log("items in priceRangeMax are:- " + productFilter.priceRangeMax);
            
            console.log("------------------------ ");
        }
    });
})();