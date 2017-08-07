/**
 * Created by gaogao on 16/7/20.
 */
angular.module("admin").controller("startPageSetController",['$scope','$state','parameterService','$rootScope', function ($scope, $state, parameterService, $rootScope) {
    var vm = this;
    vm.searchParams = $state.params;
    if (vm.searchParams.startAt) {
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined
    }
    if (vm.searchParams.endAt) {
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined
    }
    ;


    //启动页约定type为7
    vm.searchParams.type = 7;

    //获取启动页列表
    parameterService.getArticleList(vm.searchParams).then(function (res) {
        if (res.data.code == 0) {
            vm.list = res.data.data.articleList;
            vm.total = vm.total = res.data.data.total;
        }
        else {
            $rootScope.alert(res.data.message)
        }

    });


    //删除
    $scope.delete = function (id) {
        $rootScope.operationConfirm("您确定删除这条数据?","你确定要执行删除操作吗？", function () {
            parameterService.deleteArticle(id).then(function (res) {
                if (res.data.code == 0) {
                    $rootScope.alert("已成功删除", function () {
                        $state.go($state.current, {}, {reload: true})
                    })
                }
                else {
                    $rootScope.alert(res.data.message)
                }
            })
        })

    };

    //保存排序  vm.ids是重排序后的id
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