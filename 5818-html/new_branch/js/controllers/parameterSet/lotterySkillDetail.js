/**
 * Created by gaogao on 16/7/23.
 */
angular.module("admin").controller("lotterySkillDetailController",['$scope','parameterService','$rootScope','$state','$timeout',function($scope,parameterService,$rootScope,$state,$timeout){
    var vm =this;
//um实例化
    vm.um = UM.getEditor('myEditor');
    vm.id = $state.params.id;
    vm.params = {};
    //获取彩种信息
    vm.lotteryInfo=JSON.parse(sessionStorage.lotteryInfo);

    $scope.back=function(){
        vm.um.destroy()
    };

    //当离开这个scope的时候 清除um
    $scope.$on("$destroy", function() {
        $scope.back()
    })

    // 编辑时改变界面数据
    if (vm.id) {
        parameterService.putArticleDetail(vm.id).then(function (res) {
            if (res.data.code === 0) {
                vm.params = res.data.data.article;
                vm.um.setContent(vm.params.content);
            }
        });
    }

    //新增
    $scope.addArticle = function() {
        vm.params.lotteryType=vm.lotteryInfo.lotteryType;
        parameterService.addArticle(vm.params).then(function(res){
            if(res.data.code==0){
                $scope.back()
                $rootScope.alert('新增成功', $state.go('field.lotterySkill', {reload: true}));
            }
            else{
                $rootScope.alert(res.data.message);
            }
        })
    };

    //编辑
    $scope.putArticle =function () {
        parameterService.putArticle(vm.id, vm.params).then(function(res){
            if(res.data.code==0){
                $scope.back()
                $rootScope.alert('编辑成功', $state.go('field.lotterySkill', {reload: true}));

            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    };

    //分流
    $scope.addOrPut=function(status,invalid){
        if(invalid||!vm.um.hasContents()){
            vm.error=true;
            $timeout(function(){
                vm.error=false
            },3000)
        }
        else{
            vm.params.type = 1;
            vm.params.status= status;
            vm.params.content = vm.um.getContent();

            if (vm.id) $scope.putArticle();
            else $scope.addArticle();
        }

    }


}]);