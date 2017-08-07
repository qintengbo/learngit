/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('parameterSetController',function($scope,parameterService,$rootScope){
    var vm =this;
    //保存  设置按钮的状态json  true为保存显示 false为设置显示



    vm.btnStatus={
        luckySetBtn:false,
        scoreMoneySetBtn:false,
        withDrawalsSet:false
    };
    //天天摇奖设置
    vm.luckySetParams={};

    //体验金设置
    vm.scoreMoneySetParams={};

    //提现设置
    vm.withDrawalsSetParams={};

    //获取天天摇奖设置
    function getLuckSet(){
        parameterService.getLuckSet().then(function(res){
                if(res.data.code==0){
                    vm.luckySetParams=res.data.data;
                }
            else{
                    $rootScope.alert(res.data.message)
                }
        })

    }
    getLuckSet()




    //天天摇奖设置
    $scope.luckySet=function(){

        parameterService.luckySet({luckyCount:vm.luckySetParams.luckyCount}).then(function(res){
            if(res.data.code==0){
                vm.btnStatus.luckySetBtn=false
                $rootScope.alert("设置成功")

            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }

    //获取体验金设置
    function getScoureMoneySet(){
        parameterService.getScoureMoneySet().then(function(res){
            if(res.data.code==0){
                vm.scoreMoneySetParams=res.data.data;
            }
        })
    }
    getScoureMoneySet()
    //体验金设置
    $scope.scoreMoneySet=function(){
        parameterService.scoreMoneySet(vm.scoreMoneySetParams).then(function(res){
            if(res.data.code==0) {
                vm.btnStatus.scoreMoneySetBtn = false
                $rootScope.alert("设置成功")
            }
            else{
                $rootScope.alert(res.data.message)
            }

        })
    }

    //获取提现设置
    function getWithDrawalsSet(){
        parameterService.getWithDrawalsSet().then(function(res){
            if(res.data.code==0){
                vm.withDrawalsSetParams=res.data.data;
            }
        })
    }
    getWithDrawalsSet()

    //提现设置
    $scope.withDrawalsSet=function(){
        parameterService.withDrawalsSet(vm.withDrawalsSetParams).then(function(res){
            console.log(res);
            if(vm.withDrawalsSetParams.cashPercent>100){
                $rootScope.alert('每笔充值提现比例不能大于100%');
                vm.withDrawalsSetParams.cashPercent='';
                return false
            }
            if(res.data.code==0) {
                vm.btnStatus.withDrawalsSet = false
                $rootScope.alert("设置成功")
            }
            else{
                $rootScope.alert(res.data.message)
            }

        })
    }

});