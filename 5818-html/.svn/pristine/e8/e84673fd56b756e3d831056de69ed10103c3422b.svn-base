angular.module("admin")
    .controller('LotteryDetails', ['$rootScope', '$scope', '$state', 'lotteryService',
        function ($rootScope, $scope, $state, lotteryService) {
            var vm = this;
            vm.params = $state.params;
            vm.searchParams = $state.params;
            vm.size = 10;

            //搜索参数初始化
            !function () {
                vm.params.startAt = e(vm.params.startAt);
                vm.params.endAt = e(vm.params.endAt);
                //判断是否有值,有则转成数字
                function e(e) {
                    if (e)return e * 1
                }
            }();

            //清空参数
            vm.cleanSearch = function () {
                angular.forEach(vm.params, function (data, index) {
                    if (data && data != vm.params.typeCode) {
                        vm.params[index] = ""
                    }
                });
                $state.go($state.current, vm.params, {reload: true});
            };

            //搜索
            vm.cashDetailsGo = function () {
                $state.go($state.current, vm.params, {reload: true});
            };

            //开奖号管理详情
            lotteryService.LotteryDetails(vm.params, vm.params.typeCode).then(function (res) {
                if (res.data.code === 0) {
                    vm.LotteryDetails = res.data.data.data;
                    vm.total = res.data.data.total;
                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        }]);
