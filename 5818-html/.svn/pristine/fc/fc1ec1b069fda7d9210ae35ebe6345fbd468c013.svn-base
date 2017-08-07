angular.module("admin").controller('cashHandleControl', ['$rootScope', '$scope', '$state', 'cashService',
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
            function e(e){if(e)return e * 1}
        }();

        //获取提现批次列表
        vm.cashHandleList = function () {
            cashService.cashList(vm.searchParams, 2).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    vm.cashList = res.data.data.list;
                    vm.total = res.data.data.total;
                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        };
        vm.cashHandleList();

        //批量提现处理
        //vm.cashHandleBatch = function (batchId) {
        //    $rootScope.cashConfirm('是否提交处理该批次', '', '确认', '', function () {
        //        cashService.cashHandles(batchId).then(function (res) {
        //            if (res.data.code === 0) {
        //                //vm.cashList = res.data.data;
        //                $rootScope.alert("提交成功")
        //            } else {
        //                $rootScope.alert(res.data.message);
        //            }
        //        });
        //    })
        //}
    }]);
