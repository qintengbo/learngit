/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('orderDetailsPM', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.params.type = 1;
        vm.showName=$state.params.showName;
        userService.orderDetailsList(vm.params.type,vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
            console.log(vm.params.type,vm.params.userId);

            vm.params.page = res.data.data.page;
            vm.params.size = res.data.data.size;
            vm.params.total = res.data.data.total;


            vm.orderDetailsPMList = res.data.data.data;
        })
    }]);