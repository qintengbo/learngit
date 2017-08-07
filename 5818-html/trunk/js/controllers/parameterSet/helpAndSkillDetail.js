/**
 * Created by gaogao on 16/7/19.
 */
angular.module("admin").controller('helpAndSkillDetailController',['$rootScope','$scope','$state','parameterService','$timeout', function ($rootScope, $scope, $state, parameterService,$timeout) {
    var vm = this;
    vm.params = $state.params;
    vm.lotteryName=$state.params.lotteryName;

    //帮助中心约定type为6
    vm.params.type = 6;

    //um实例化
    vm.um = UM.getEditor('myEditor');
    $scope.back=function(){
        vm.um.destroy()
    };
    //当离开这个scope的时候 清除um
    $scope.$on("$destroy", function() {
        $scope.back()
    })


    if (!vm.params.id) {
        //帮助新增
        vm.helpAndSkillSetAdd = function (status,invalid) {
            if(invalid||!vm.um.hasContents()){
                vm.error=true;
                $timeout(function(){
                    vm.error=false
                },3000)
            }
            else{
                vm.params.content = vm.um.getContent();
                vm.params.status = status;
                parameterService.addArticle(vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $scope.back()
                        $rootScope.alert("添加成功", $state.go("field.helpAndSkillSet", {}, {reload: true}));
                    }
                    else {
                        $rootScope.alert(res.data.message);
                    }
                })
            }

        }
    } else {
        //帮助获取信息
        parameterService.putArticleDetail(vm.params.id).then(function (res) {
            if (res.data.code === 0) {
                vm.params = res.data.data.article;
                vm.um.setContent(vm.params.content);
            }
        });
        //帮助编辑
        vm.helpAndSkillSetAdd = function (status,invalid) {
            if(invalid||!vm.um.hasContents()){
                vm.error=true;
                $timeout(function(){
                    vm.error=false
                },3000)
            }
            else{
                vm.params.status = status;
                vm.params.content = vm.um.getContent();
                parameterService.putArticle(vm.params.id, vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $scope.back()
                        $rootScope.alert("修改成功", $state.go("field.helpAndSkillSet", {}, {reload: true}));
                    }
                    else {
                        $rootScope.alert(res.data.message);
                    }
                })
            }

        }
    }


}]);