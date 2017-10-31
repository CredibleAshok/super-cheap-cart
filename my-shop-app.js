(function () {
    myShopApp = angular.module('myShopAppTest', ['ui.router']);
    var configFunction = function ($stateProvider) {
        var ourStates = [{
            name: 'stores',
            url: '/stores',
            templateUrl: 'stores.html'
        },{
            name: 'products',
            url: '/products',
            templateUrl: 'products.html'
        },{
            name: 'home',
            url: '/home',
            templateUrl: 'home.html'
        }];
        for (var i = 0; i < ourStates.length; i++) {
            $stateProvider.state(ourStates[i]);
        }
    }
    myShopApp.config(configFunction);
})();