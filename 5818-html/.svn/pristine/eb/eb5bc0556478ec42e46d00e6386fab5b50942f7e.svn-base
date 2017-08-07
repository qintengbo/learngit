angular.module("admin").controller('cashAuditControl', ['$rootScope', '$scope', '$state', 'cashService',
    function ($rootScope, $scope, $state, cashService) {
        var vm = this;
        vm.searchParams = $state.params;
        //初始化参数
        !function () {
            vm.searchParams.dealStart = e(vm.searchParams.dealStart);
            vm.searchParams.dealEnd = e(vm.searchParams.dealEnd);
            vm.searchParams.completeStart = e(vm.searchParams.completeStart);
            vm.searchParams.completeEnd = e(vm.searchParams.completeEnd);
            //判断是否有值,有则转成数字
            function e(e) {
                if (e)return e * 1
            }
        }();

        //获取提现批次列表
        vm.cashList = function () {
            cashService.cashList(vm.searchParams, 1).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    vm.cashList = res.data.data.list;
                    vm.total = res.data.data.total;
                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        };
        vm.cashList()

    }]);
