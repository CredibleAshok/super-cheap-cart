(function () {
    var checkoutController = myShopApp.controller('checkoutController', ['$filter', '$scope', '$rootScope', function ($filter ,$scope, $rootScope) {
        var vm = this;
        vm.myitem = 10;
        vm.passwordValidated = true;
        vm.userLoginAuthenticated = false;
        vm.user = {};
        vm.user.Name = "TestUser";
        vm.user.Email = "TestUser@gmail.com";
        vm.user.MobileNumber = "+91-9876543234";
        vm.user.accountTypes = [
            { "accountTypeId": 1, "Name": "Already Registered" },
            { "accountTypeId": 2, "Name": "Not Registered" },
            { "accountTypeId": 3, "Name": "Guest Login" }
        ]

        vm.deliveryType = [{
            "DeliveryTypeId": 1,
            "Name": "Standard"
        }, {
            "DeliveryTypeId": 2,
            "Name": "Express"
        }];
        
        vm.openLoginForm = function (accountType) {
            vm.user.accountType = accountType;
            vm.user.account = $filter('filter')(vm.user.accountTypes, { accountTypeId: accountType }, true)[0];
            //$filter(vm.user.accountTypes, { accountTypeId: accountType }, true)[0];
        }
        vm.authenticateUser = function (user, accountType) {
            switch (accountType) {
                case 1:
                    console.log("Already Registered");
                    break;
                case 2:
                    console.log("Not Registered");
                    break;
                case 3:
                    vm.userLoginAuthenticated = true;
                    var elementUserLoign = document.getElementById("collapseUserLoign");
                    elementUserLoign.classList.remove("in");
                    var elementCollapseHeadingDeliveryAddress = document.getElementById("collapseHeadingDeliveryAddress");
                    elementCollapseHeadingDeliveryAddress.classList.add("in");
                    break;
                default:
                    console.log("default login");
                    break;
            }
        }
        vm.validateSamePassword = function (password, confirmPassword) {
            if (password == confirmPassword) {
                vm.passwordValidated = true;
            } else {
                vm.passwordValidated = false;
            }
        }
    }]);
})();