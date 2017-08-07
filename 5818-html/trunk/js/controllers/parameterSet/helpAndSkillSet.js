/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('helpAndSkillSetController',['$rootScope','$scope','$state','parameterService', function ($rootScope, $scope, $state, parameterService) {
    var vm = this;
    vm.searchParams = $state.params;
    vm.searchParams.startAt=parseInt(vm.searchParams.startAt) || undefined;
    vm.searchParams.endAt=parseInt(vm.searchParams.endAt) || undefined;

    //帮助中心type约定为6
    vm.searchParams.type = 6;

    //获取帮助列表
    vm.getHelpList = function () {
        parameterService.getArticleList(vm.searchParams).then(function (res) {
            if (res.data.code === 0){
                vm.list = res.data.data.articleList;
                vm.total = res.data.data.total;
            }else if(res.data.code === 2){
                //数据不存在不出现模态框
            }else {
                $rootScope.alert(res.data.message);
            }
        })
    };
    vm.getHelpList();

    //删除
    vm.helpAndSkillSetDle = function (id) {
        $rootScope.operationConfirm("删除后该帮助信息将直接下架并在本地删除","你确定要执行删除操作吗?", function () {
            parameterService.deleteArticle(id).then(function (res) {
                if (res.data.code === 0) {
                    $rootScope.alert("已成功删除", $state.go($state.current,vm.searchParams, {reload: true}));
                }
                else {
                    $rootScope.alert(res.data.message,$state.go($state.current,vm.searchParams, {reload: true}));
                }
            })
        })
    };

    //保存排序  vm.ids是重排序后的id
    vm.saveDrop=function(){
        vm.ids=[];
        angular.forEach(vm.list,function(data,index){
            vm.ids[index]=data.id
        });
        $rootScope.confirm("是否保存排序?",function(){
            parameterService.saveDrop(vm.ids).then(function(res){
                if (res.data.code === 0) {
                    $rootScope.alert("已保存排序", $state.go($state.current,vm.searchParams, {reload: true}));
                }
                else {
                    $rootScope.alert(res.data.message,$state.go($state.current,vm.searchParams, {reload: true}));
                }
            })
        })
    };

}]);