/**
 * Created by gaogao on 16/7/20.
 */
angular.module("admin").controller('adviertisementDetailController',function($rootScope,$scope,$state,parameterService,$timeout){
    var vm = this;
    vm.params = $state.params;

    //获取彩票彩种列表
    parameterService.getlotteryTypeList().then(function(res){
        if(res.data.code==0){
            vm.lotteryList=res.data.data.list
            console.log(vm.lotteryList)
        }
        else{
            $rootScope.alert(res.data.message)
        }

    })



    //广告管理约定type为5
    vm.params.type = 5;
    
    if (!vm.params.id) {
        //广告新增
        vm.adviertisementAdd = function (status,invalid) {
            if(invalid){
         vm.error=true;
                $timeout(function(){
                    vm.error=false;
                },3000)
            }
            else{
                vm.params.status = status;
                parameterService.addArticle(vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert("添加成功", $state.go("field.adviertisementSet", {}, {reload: true}));
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
            }
        });
        //帮助编辑
        vm.adviertisementAdd = function (status) {
            vm.params.status = status;
            parameterService.putArticle(vm.params.id, vm.params).then(function (res) {
                if (res.data.code === 0) {
                    $rootScope.alert("修改成功", $state.go("field.adviertisementSet", {}, {reload: true}));
                }
                else {
                    $rootScope.alert(res.data.message);
                }
            })
        }
    }

});