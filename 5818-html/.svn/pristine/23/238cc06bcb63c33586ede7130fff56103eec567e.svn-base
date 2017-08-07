angular.module("admin")
    .controller('LotteryManage', ['$rootScope', '$scope', '$state', 'lotteryService',
        function ($rootScope, $scope, $state, lotteryService) {
            var vm = this;
            vm.params = $state.params;
            vm.size = 10;
            //开奖号管理列表
            lotteryService.LotteryList().then(function (res) {
                if (res.data.code === 0) {
                    vm.LotteryList = res.data.data.data;
                    vm.total = res.data.data.total;
                    // console.log(total);
                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        }]);