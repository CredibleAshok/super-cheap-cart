//(function () {
//    var cartService = myShopApp.service('cartService', function () {
//        var msgs = "this is coming from service";
//        var itemsInCart = 0;
//        var setItemsInCart = function () {
//            itemsInCart += 1;
//        }
//        var testFunction = function (msg) {
//            return msg;
//        };
//        return cartService;
//    });
//})();

(function () {
    myShopApp.factory('cartService', [function () {
        var loanTypes = {};
        var itemsInCart = [];
        var service = {
            getApplicationList: function (searchFilter) { return getApplicationList(searchFilter) },
            setItemsInCart: function (product) { return setItemsInCart(product) },
            getItemCountInCart: function () { return getItemCountInCart() },
            getAllItemsInCart: function () { return getAllItemsInCart() }
        };
        return service;

        function getApplicationList(searchFilter) {
            return "ashok is my name";
        }
        function setItemsInCart(product) {
            itemsInCart.push(product);
        }
        function getItemCountInCart() {
            return itemsInCart.length;
        }
        function getAllItemsInCart() {
            return itemsInCart;
        }
    }]);
})();

