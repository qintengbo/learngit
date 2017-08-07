/**
 * Created by gaogao on 16/9/25.
 */
'use strict'
angular.module('admin').controller('versionControllerDetailCtrl',['$scope','parameterService','$state','$rootScope',function ($scope,parameterService,$state,$rootScope){
    var vm =this;
    vm.params={};
    vm.params.type=8;
    vm.id=$state.params.id
    //um实例化
    vm.um = UM.getEditor('myEditor');
    $scope.back = function () {
        vm.um.destroy()
    };

    //当离开这个scope的时候 清除um
    $scope.$on("$destroy", function() {
        $scope.back()
    })

    //获取这个id的详情
    parameterService.putArticleDetail(vm.id).then(function(res){
        if(res.data.code==0){
            vm.params.status=res.data.data.article.status
            vm.params.version=res.data.data.article.version
            vm.params.content=res.data.data.article.content
            vm.params.url=res.data.data.article.url
            vm.params.title=res.data.data.article.title
            vm.params.summary=res.data.data.article.summary;
            vm.um.setContent(vm.params.content);

        }
    })


    //提交
    $scope.submit=function(){
        vm.params.content=vm.um.getContent();
        parameterService.putArticle(vm.id,vm.params).then(function(res){
            if(res.data.code==0){
                $rootScope.alert(res.data.message)
                $state.go('field.versionController',{reload:true})
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }



}])