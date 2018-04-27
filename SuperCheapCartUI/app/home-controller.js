(function () {
    var homeController = myShopApp.controller('homeController', [function () {
        var vm = this;
        vm.myitem = 10;
        vm.deals = [{
            "DiscountId": 1,
            "Name": "Mega Offer",
            "img": "http://placehold.it/940x300"
        }, {
            "DiscountId": 2,
            "Name": "Jumbo Offer",
            "img": "http://placehold.it/940x300"
        }, {
            "DiscountId": 3,
            "Name": "Diwali Dhamaka",
            "img": "http://placehold.it/940x300"
        }, {
            "DiscountId": 4,
            "Name": "Holi Huranga",
            "img": "http://placehold.it/940x300"
        }];
        vm.nevigateTo= function(discountId){
            console.log("discount id is:- " + discountId);
        }
    }]);
})();