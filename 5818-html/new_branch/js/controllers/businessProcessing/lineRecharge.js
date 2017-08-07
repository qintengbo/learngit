/**
 * Created by zhoucc on 2016/7/18.
 */
angular.module("admin").controller('lineRecharge', ['$rootScope','$scope','$state','userService','$modal','$timeout',
    function($rootScope,$scope,$state,userService,$modal,$timeout) {
        var vm = this;
        vm.subclick = $state.params;
        vm.subclick.happenAt=new Date().getTime();


        vm.subclickgo = function () {
            vm.lineRechargeModal.hide();
            userService.lineRecharge(vm.subclick.mobile,vm.subclick).then(function (res) {
                if(res.data.code === 0){
                    $rootScope.rechargeAlert("您已充值成功",res.data.data.id,vm.subclick.mobile);
                    $state.go($state.current,vm.searchParams,{reload:true})
                }else {
                    //vm.errorTip = res.data.message;
                    //$timeout(function() {
                    //    vm.errorTip = "";
                    //}, 3000);
                    $rootScope.alert(res.data.message)
                }
            })
        };
        //清空
        vm.clean = function() {
            angular.forEach(vm.subclick, function (data, index) {
                if(index !== 'size'){
                    vm.subclick[index] = '';
                }
            });
        };
        //弹出确认模态框
        vm.lineRechargeaction = function () {
            //alert(vm.subclick.money)
                //充值金额不能为0
            if(!vm.subclick.happenAt||vm.subclick.happenAt==null){
                $rootScope.alert("请填写充值时间");
                return
            }
                    if(vm.subclick.money!=0){
                        vm.lineRechargeModal.show();
                    }
                else{
                        $rootScope.alert("充值金额不允许为0");
                        vm.subclick.money=''
                    }
        };
        //验证手机号
        vm.mobilechange = function () {
            if(vm.subclick.mobile){
                vm.subclick.mobile = vm.subclick.mobile.replace(/[^0-9]/g, '')
            }

        };
        ////模态框初始化
        vm.lineRechargeModal = $modal({
            templateUrl: 'lineRecharge.html',
            scope: $scope,
            show: false
        });
    }]);


