angular.module("admin")
    .controller('LotteryRedact', ['$rootScope', '$scope', '$state', 'lotteryService',
        function ($rootScope, $scope, $state, lotteryService) {
            var vm = this;
            vm.params = $state.params;
            vm.params.id = $state.params.id;

            //开奖号管理编辑查询
            lotteryService.LotteryDetailsDemand(vm.params).then(function (res) {
                if (res.data.code === 0) {
                    vm.params = res.data.data;
                    if(vm.params.wining){
                        vm.params.wining=JSON.parse(vm.params.wining)
                    }
                } else {
                    $rootScope.alert(res.data.message);
                }
            });

            vm.LotteryChange = function () {
                var params= angular.copy(vm.params);
                params.wining=JSON.stringify(vm.params.wining);

                //开奖号管理编辑
                lotteryService.LotteryDetailsChange(params, params.id).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert("添加成功", $state.go("field.LotteryDetails", ({typeCode: vm.params.typeCode}), {reload: true}));
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            };
        }]);
