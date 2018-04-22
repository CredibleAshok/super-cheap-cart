(function () {
    var productsController = myShopApp.controller('productsController', ['cartService', function (cartService) {
        var vm = this;
        vm.myitem = 10;

        vm.products = [
            {
                "ProductId": 1,
                "Name": "Coke",
                "BrandId": 3,
                "DiscountId": null,
                "SubCategoryId": 1,
                "Price": 12,
                "PackageSizeId": 1,
                "PackageTypeId": 1,
                "ProductIcon": 1,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 2,
                "Name": "Coke",
                "BrandId": 3,
                "DiscountId": null,
                "SubCategoryId": 1,
                "Price": 10,
                "PackageSizeId": 1,
                "PackageTypeId": 2,
                "ProductIcon": 2,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 3,
                "Name": "Pepsi",
                "BrandId": 4,
                "DiscountId": null,
                "SubCategoryId": 1,
                "Price": 13,
                "PackageSizeId": 1,
                "PackageTypeId": 1,
                "ProductIcon": 1,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 4,
                "Name": "Pepsi",
                "BrandId": 4,
                "DiscountId": null,
                "SubCategoryId": 1,
                "Price": 11,
                "PackageSizeId": 1,
                "PackageTypeId": 2,
                "ProductIcon": 2,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 5,
                "Name": "Bolt Energy",
                "BrandId": 7,
                "DiscountId": null,
                "SubCategoryId": 2,
                "Price": 34,
                "PackageSizeId": null,
                "PackageTypeId": 1,
                "ProductIcon": 1,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 6,
                "Name": "Revital",
                "BrandId": 8,
                "DiscountId": null,
                "SubCategoryId": 2,
                "Price": 112,
                "PackageSizeId": 2,
                "PackageTypeId": 1,
                "ProductIcon": 2,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 7,
                "Name": "Salted Lassi",
                "BrandId": 5,
                "DiscountId": null,
                "SubCategoryId": 3,
                "Price": 10,
                "PackageSizeId": 2,
                "PackageTypeId": 2,
                "ProductIcon": 1,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 8,
                "Name": "Salted Lassi",
                "BrandId": 6,
                "DiscountId": null,
                "SubCategoryId": 3,
                "Price": 10,
                "PackageSizeId": 2,
                "PackageTypeId": 2,
                "ProductIcon": 2,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 9,
                "Name": "Milk",
                "BrandId": 5,
                "DiscountId": null,
                "SubCategoryId": 4,
                "Price": 34,
                "PackageSizeId": 2,
                "PackageTypeId": 2,
                "ProductIcon": 1,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            },
            {
                "ProductId": 10,
                "Name": "Milk",
                "BrandId": 6,
                "DiscountId": null,
                "SubCategoryId": 4,
                "Price": 23,
                "PackageSizeId": 2,
                "PackageTypeId": 1,
                "ProductIcon": 2,
                "Brand": null,
                "OrderDetails": [],
                "PackageSize": null,
                "PackageType": null,
                "Stocks": [],
                "SubCategory": null
            }
        ];
        vm.tot = vm.products.length;
        vm.samplep = [{ "ashok": 12, "age": 4 }, { "ashok": 12, "age": 4 }, { "ashok": 12, "age": 4 }];
        vm.currencyCode = "$";
        vm.numberOfItemsInCart = 0;
        vm.addToCart = function (product) {
            //console.log("function called.");
            //alert("Product " + product.Name + " added to Cart.");
            product.Quantity = 1;
            product.totalAmt = product.Price;
            cartService.setItemsInCart(product);
        }
        vm.showButton = function (btnName) {
            var btn = document.getElementsByName("btn" + btnName);
            btn[0].style.display = "block";
        }
        vm.hideButton = function (btnName) {
            var btn = document.getElementsByName("btn" + btnName);
            btn[0].style.display = "none";

        }
    }]);
})();