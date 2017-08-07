/**
 * Created by gaogao on 16/7/19.
 */
angular.module("admin").controller('luckDrawDetailController',['$scope','$state','$rootScope','parameterService','$timeout',function($scope,$state,$rootScope,parameterService,$timeout){
    var vm = this;
    vm.id=$state.params.id;
    vm.params={};
    if (vm.params.prize==''||vm.params.prize==undefined) vm.params.prize=-2 ;
    if(vm.params.status==''||vm.params.status==undefined)vm.params.status=2;
    vm.redList=[]

    //新增
    $scope.newLuck=function(){
        vm.params.prize=parseInt(vm.params.prize);
        parameterService.newLuck(vm.params).then(function(res){
            if(res.data.code===0){
                $rootScope.alert('新增成功', $state.go('field.luckDrawSet', {reload: true}));
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    };

    //获取奖品详情
    function getLuckDetail(){
        parameterService.getLuckDetail(vm.id).then(function(res){
                if(res.data.code==0){
                    vm.params=res.data.data;
                }
            else{
                    $rootScope.alert(res.data.message)
                }
        })



    }
    if(vm.id){
        getLuckDetail()
    }

    //获取红包列表
    function getRedList(){
        //status 1为草稿 2为上线
        parameterService.getRedSet({page:1,size:9999}).then(function(res){
            if(res.data.code==0){
                    angular.forEach(res.data.data,function(data){
                        if(data.status==2 && data.endAt>$rootScope.nowDate){
                            vm.redList.push(data)
                        }
                    })
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }
    getRedList();

    //编辑
    $scope.putLuck=function(){
        vm.params.prize=parseInt(vm.params.prize);
        parameterService.putLuck(vm.id,vm.params).then(function(res){
            if(res.data.code===0){
                $rootScope.alert('编辑成功', $state.go('field.luckDrawSet', {reload: true}));
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    };

    //分流
    $scope.newOrPut=function(invalid){
        if(invalid){
                vm.error=true;
            $timeout(function(){
                vm.error=false
            },3000)
        }
        else{
            if (vm.id) $scope.putLuck();
            else $scope.newLuck()
        }

    }

}]);