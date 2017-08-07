/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('orderDetailsEM', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.showName=$state.params.showName;
        vm.params.type = 2;
        userService.orderDetailsList(vm.params.type,vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
         if(res.data.code==0){
             vm.orderDetailsEMList = res.data.data.data;
             vm.params.page = res.data.data.page;
             vm.params.size = res.data.data.size;
             vm.params.total = res.data.data.total;

         }
            else{
             $rootScope.alert(res.data.message)
         }


        });
    }]);