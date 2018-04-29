(function () {
    myShopApp = angular.module('myShopAppTest', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router', 'ui.select']);
    var configFunction = function ($stateProvider) {
        var ourStates = [{
            name: 'stores',
            url: '/stores',
            templateUrl: 'stores.html'
        }, {
            name: 'products',
            url: '/products',
            templateUrl: 'app/products.html'
        }, {
            name: 'home',
            url: '/home',
            templateUrl: 'app/home.html'
        }, {
            name: 'productsByCategory',
            url: '/products/category',
            templateUrl: 'app/products.html'
            
        }];
        for (var i = 0; i < ourStates.length; i++) {
            $stateProvider.state(ourStates[i]);
        }
    };
    myShopApp.config(configFunction);
})();