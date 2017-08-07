/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('luckDrawSetController',['$scope','$state','parameterService','commonUtil','$rootScope', function ($scope, $state, parameterService, commonUtil, $rootScope) {
    var vm = this;
    vm.searchParams = $state.params;

    // 初始化时页面page为1
    if ($state.params.page === undefined) {
        $state.params.page = 1;
    }
    vm.searchParams.creatAtStart=parseInt(vm.searchParams.creatAtStart) || undefined;
    vm.searchParams.creatAtEnd=parseInt(vm.searchParams.creatAtEnd) || undefined;



//获取奖品列表
    parameterService.getLuckLIst(vm.searchParams).then(function (res) {
        if(res.data.code==0){
            vm.total = res.data.total;
            $state.params.size = res.data.size;
            vm.list = res.data.data;
        }
        else{
            $rootScope.alert(res.data.message)
        }

    });

    // 状态显示
    vm.status = function (status) {
        if (status) return "已上线";
        return "草稿";
    };

    // 奖品显示
    vm.prize = function (prize) {
        if (prize === 0) return "满60减5红包";
        if (prize === 1) return "奖金";
        return "体验金";
    };

    //删除奖品
    $scope.deleteLuck = function (id,index) {
        $rootScope.operationConfirm("您确定删除这条数据?","你确定要执行删除操作吗？", function () {
            parameterService.deleteLuck(id).then(function (res) {
                if (res.data.code === 0) {
                    $rootScope.alert("已成功删除",function(){
                        $state.go($state.current,{},{reload:true})
                    })
                }
                else{
                    $rootScope.alert(res.data.message)
                }
            })
        })
    }

    //设置最低奖
    $scope.setLowerLcuk=function(listIndex,id){
        parameterService.setLowerLcuk(id).then(function(res){
            if(res.data.code==0){
                $state.go($state.current,{},{reload:true})
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }


}]);