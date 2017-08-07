angular.module("admin").controller('rechargeStatisticsControl', ['$rootScope', '$scope', '$state', 'rechargeService',
    function ($rootScope, $scope, $state, rechargeService) {
        var vm = this;
        vm.searchParams = $state.params;
        //初始化参数
        !(function () {
            vm.searchParams.startAt = e(vm.searchParams.startAt);
            vm.searchParams.endAt = e(vm.searchParams.endAt);
            vm.totalRecharge = 0;
            function e(e){if(e)return e*1}
        })();




        //金额千分位转换
        function format (num) {
            return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        }

        var gao =format(12220000);




        //获取最新充值数据
        !(function rechargeList() {
            rechargeService.rechargeList(vm.searchParams).then(function (res) {
                if (res.data.code === 0) {
                    var userList,moneyHistory;

                    //用户信息
                    userList = res.data.user;
                    //充值信息
                    moneyHistory = res.data.data;
                    if (!userList || !moneyHistory){
                        return $rootScope.alert("返回字段有误,暂停运行,数据不展示.")
                    }
                    //根据id合并对象数组,用moneyHistory的userID去查找用户列表中的数据,
                    for (var i = 0; i < moneyHistory.length; i++) {
                        for (var j = 0; j < userList.length;j++){
                            if(moneyHistory[j].userId === userList[i].id){
                                moneyHistory[i].name = userList[j].name;
                                moneyHistory[i].mobile = userList[j].mobile;
                                break;
                            }
                        }
                    }
                    vm.list = moneyHistory;
                    //获取总金额
                    vm.totalRecharge = res.data.totalRechargeMoney;
                    vm.total = res.data.total;


                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        })();
    }]);