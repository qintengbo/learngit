/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('redMoneyDetail', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.showName=$state.params.showName
        userService.redMoneyDetailList(vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
            vm.redMoneyDetailList = res.data.redHistoryList;
            vm.redNameMobile = res.data

            vm.params.page = res.data.page;
            vm.params.size = res.data.size;
            vm.params.total = res.data.total;


        });
    }]);