/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('rechargeRecord', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.showName=$state.params.showName

        console.log(vm.params);
        userService.rechargeRecordList(vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
            vm.rechargeRecordList = res.data.data;
            vm.rNameMobile = res.data.user[0] ;
            console.log(vm.rNameMobile.mobile)


            vm.params.page = res.data.page;
            vm.params.size = res.data.size;
            vm.params.total = res.data.total;

            console.log(vm.rechargeRecordList);
        });
    }]);