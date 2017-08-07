/**
 * Created by zhoucc on 2016/7/18.
 */
angular.module("admin").controller('userDetails', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        console.log(vm.params);
        userService.userManagementDetails(vm.params.userId).then(function (res) {
            console.log(res);
            vm.userdetails = res.data.data;
            vm.userPM = res.data;
            vm.userbank = res.data.bankCardList[0];
            console.log(vm.userbank);


        });
    }]);