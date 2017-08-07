/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('orderDetailsPMDetails', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        userService.orderDetailsMDetails(vm.params.id).then(function(res){
           if (res.data.code === 0){
               vm.orderDetailsPMList = res.data.data;
               //vm.orderDetailsPMListNum = JSON.parse(res.data.data.detailJson);

           }else {
               $rootScope.alert(res.data.message)
           }
        })
    }]);