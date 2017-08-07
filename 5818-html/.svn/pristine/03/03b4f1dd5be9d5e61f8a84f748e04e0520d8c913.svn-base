/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('pushSetController',
    function ($rootScope, $scope, $state, parameterService) {
        var vm = this;
        vm.searchParams = $state.params;
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        //push type约定为4
        vm.searchParams.type =4;

        //获取push列表
        function getPushList() {
            parameterService.getArticleList(vm.searchParams).then(function (res) {
                if(res.data.code==0){
                    console.log(res);
                    vm.list = res.data.data.articleList;
                    vm.total = res.data.data.total;
                }
                else{
                    $rootScope.alert(res.data.message)
                }

            })
        }

        getPushList();

        //删除push列表
        vm.pushDelete = function (id,index) {
            $rootScope.operationConfirm("您确定删除这条数据?","你确定要执行删除操作吗？", function () {
                parameterService.deleteArticle(id).then(function (res) {
                    if (res.data.code === 0) {
                        // $rootScope.alert("已成功删除",getPushList());
                        $rootScope.alert("已成功删除", function(){
                            vm.list.splice(index,1)
                        });
                    }
                    else {
                        $rootScope.alert(res.data.message, $state.go($state.current, {}, {reload: true}));
                    }
                });
            })
        };


    });