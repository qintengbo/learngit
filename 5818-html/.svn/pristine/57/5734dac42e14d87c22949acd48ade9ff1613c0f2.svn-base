/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('lotteryTypeSetController',['$scope','parameterService','$rootScope','$state',function($scope,parameterService,$rootScope,$state){
    var vm =this;
    vm.params={}
    vm.params.page=$state.params.page||1;
    vm.params.size=$state.params.size||10;

    //获取彩票种类列表列表
    function getlotteryTypeList(){
        parameterService.getlotteryTypeList(vm.params).then(function(res){
            if(res.data.code==0){
                vm.list=res.data.data.list;
                vm.totalPage=res.data.total
            }
            else{
                $rootScope.alert(res.data.message)
            }

        })
    }
    getlotteryTypeList();

    //开售 停售状态切换
    $scope.lotteryStartEnd=function(id,status){
        $rootScope.confirm("是否切换状态?",function(){
            parameterService.lotteryStartEnd(id,status).then(function(res){
                if(res.data.code==0){
                    $state.go($state.current,{},{reload:true})
                }
                else{
                    $rootScope.alert(res.data.message)
                }
            })
        })

    }


    //跳转至彩种技巧
    $scope.goToSkill=function(li){
        //ui-sref="({lotteryType:li.typeCode,lotteryName:li.name})"
        var lotteryInfo=JSON.stringify({lotteryType:li.typeCode,lotteryName:li.name});
        sessionStorage.lotteryInfo=lotteryInfo;
        $state.go('field.lotterySkill',{},{reload:true})
    }


    //保存设置
    $scope.saveDrop=function(){
        vm.ids=[];
        angular.forEach(vm.list,function(data,index){
            vm.ids[index]=data.id
        });

        $rootScope.confirm("是否保存排序?",function(){
            parameterService.saveLotterySort(vm.ids).then(function(res){
                if(res.data.code==0){
                    $rootScope.alert("已保存排序", $state.go($state.current,vm.searchParams, {reload: true}));
            }
                else{
                    $rootScope.alert(res.data.message,$state.go($state.current,vm.searchParams, {reload: true}));
                }
            })
        })

    }



}]);