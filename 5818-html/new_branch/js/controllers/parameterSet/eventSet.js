/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('eventSetController',['$scope','parameterService','$state','$rootScope', function ($scope, parameterService, $state, $rootScope) {
    var vm = this;
    vm.searchParams = $state.params;
    if (vm.searchParams.startAt) {
        vm.searchParams.startAt = parseInt($state.params.startAt);

    }
    if (vm.searchParams.endAt) {
        vm.searchParams.endAt = parseInt($state.params.endAt);

    }

    vm.searchParams.type = 3;
    //获取活动列表
    function getEventList() {
        parameterService.getArticleList(vm.searchParams).then(function (res) {
            if (res.data.code === 0) {
                vm.list = res.data.data.articleList;
                vm.total = res.data.data.total;
            } else if (res.data.code === 2) {
                //数据不存在不出现模态框
            } else {
                $rootScope.alert(res.data.message);
            }
        })
    }

    getEventList();

    //删除
    vm.deleteEvent = function (id,index) {
        $rootScope.operationConfirm("删除后该活动将直接下架并在本地删除?", "你确定要执行删除操作吗？", function () {
            parameterService.deleteArticle(id).then(function (res) {
                if (res.data.code === 0) {
                    $rootScope.alert("已成功删除",function(){
                            vm.list.splice(index,1)
                        }
                    );
                }
                else {
                    $rootScope.alert(res.data.message, $state.go($state.current, vm.searchParams, {reload: true}));
                }
            })
        })
    };

    //保存排序  type为5  vm.ids是重排序后的id
    $scope.saveDrop = function () {
        vm.ids = [];
        angular.forEach(vm.list, function (data, index) {
            vm.ids[index] = data.id
        });
        $rootScope.confirm("是否保存排序?", function () {
            parameterService.saveDrop(vm.ids).then(function (res) {
                if (res.data.code === 0) {
                    $rootScope.alert("已保存排序", $state.go($state.current, vm.searchParams, {reload: true}));
                }
                else {
                    $rootScope.alert(res.data.message, $state.go($state.current, vm.searchParams, {reload: true}));
                }
            })
        })
    };

}]);