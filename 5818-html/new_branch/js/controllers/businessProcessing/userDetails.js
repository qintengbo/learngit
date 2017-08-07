/**
 * Created by zhoucc on 2016/7/18.
 */
angular.module("admin").controller('userDetails', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        userService.userManagementDetails(vm.params.userId).then(function (res) {
            vm.userdetails = res.data.data;
            vm.userPM = res.data;
            vm.userbank = res.data.bankCardList[0];


        });
    }]);