/**
 * Created by gaogao on 16/7/22.
 */
angular.module("admin").controller("redSetDetailController",['$scope','$state','parameterService','$rootScope','$timeout', function ($scope, $state, parameterService,$rootScope,$timeout) {
    var vm = this;
    vm.id = $state.params.id;
    vm.params={};
    vm.error=false;

    //获取彩票彩种列表
    function getLotteryType(){
        parameterService.getlotteryTypeList().then(function(res){
            if(res.data.code==0){
                vm.lotteryList=res.data.data.list;
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }
    getLotteryType();

    //获取红包详情
    $scope.redDetail = function () {
        parameterService.redDetail(vm.id).then(function (res) {
            if (res.data.code == 0) {
                vm.params=res.data.data;
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }

    if(vm.id){
        $scope.redDetail()
    }



    //新增
    $scope.newRed = function () {
        //满减金额必须大于等于优惠金额
        if(parseInt(vm.params.total)>=parseInt(vm.params.submoney)){
            getTypeReadable()
//这里需要处理下 时间选择器 选择的都是凌晨 0:00   需要 23:59
            if(vm.params.endAt){
                vm.params.endAt=parseInt(vm.params.endAt)+86400000 - 1;
            }

            parameterService.newRed(vm.params).then(function (res) {
                if(res.data.code==0){
                    $state.go('field.redSet',{},{reload:true})
                }
                else{
                    $rootScope.alert(res.data.message)
                }
            })
        }
        else{
            $rootScope.alert("满减金额必须大于等于优惠金额")
        }

    }

    //将type的名字筛选出来
    function getTypeReadable(){
        if(vm.params.type==-1){
            vm.params.typeReadable="通用"
        }
        else{
            angular.forEach(vm.lotteryList,function(data,index){
                if(data.typeCode==vm.params.type){
                    vm.params.typeReadable=data.name;
                }
            })
        }
    }


    //编辑
    $scope.putRed = function () {
        getTypeReadable()
        parameterService.putRed(vm.id,vm.params).then(function (res) {
            if(res.data.code==0){
            $state.go('field.redSet',{},{reload:true})
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }

    //分流
    $scope.newOrPut = function (valid) {
        if(valid){
            if (vm.id) $scope.putRed();
            else $scope.newRed();
        }
       else{
            vm.error=true;
            $timeout(function(){
                vm.error=false

            },3000)
        }

    }
    vm.activeDate = new Date().getTime();



}])