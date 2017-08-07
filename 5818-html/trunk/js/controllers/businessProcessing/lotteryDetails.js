    /**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('lotteryDetails', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
    }]);