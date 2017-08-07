/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('withdrawalsRecord', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.showName=$state.params.showName

        userService.withdrawalsRecordList(vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
            if (res.data.code === 0){
                vm.withdrawalsRecordList = res.data.data;
                vm.params.page = res.data.page;
                vm.params.size = res.data.size;
                vm.params.total = res.data.total;

            }else {
                $rootScope.alert(res.data.message)
            }
        });
    }]);