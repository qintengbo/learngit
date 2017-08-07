/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('orderDetailsEMDetails', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        userService.orderDetailsMDetails(vm.params.id).then(function(res){
            vm.orderDetailsEMList = res.data.data;
        })
    }]);