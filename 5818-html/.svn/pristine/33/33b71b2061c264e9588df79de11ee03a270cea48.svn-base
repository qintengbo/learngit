/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('redSetController', function ($scope, parameterService, $state, $rootScope) {
    var vm = this;
    vm.searchParams = $state.params;
    if (vm.searchParams.startAt) {
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt);
    }
    if (vm.searchParams.endAt) {
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt);

    }


    //获取红包列表
    function getRedSet() {
        parameterService.getRedSet(vm.searchParams).error(function () {
        }).then(function (res) {
            console.log(res);
            vm.totalPage = res.data.total;
            vm.list = res.data.data;
        })

    }

    getRedSet()

    //删除红包记录
    $scope.deleteRed = function (id,index) {
        $rootScope.operationConfirm("您确定删除这条数据?","你确定要执行删除操作吗？", function () {
            parameterService.deleteRed(id).then(function (res) {
                if(res.data.code==0){
                    $rootScope.alert("已成功删除",function(){
                        vm.list.splice(index,1)
                    })
                }
                else{
                    $rootScope.alert(res.data.message)
                }
            })
        })
    }


});