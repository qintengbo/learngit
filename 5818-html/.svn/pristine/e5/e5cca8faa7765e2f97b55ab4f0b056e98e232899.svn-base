/**
 * Created by zhoucc on 2016/7/18.
 */
angular.module("admin").controller('userManagement', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.searchParams=$state.params;
        //
        !(function () {
            vm.searchParams.startAt = e(vm.searchParams.startAt);
            vm.searchParams.endAt = e(vm.searchParams.endAt);
            vm.totalRecharge = 0;
            function e(e){if(e)return e*1}
        })();
        //获取用户列表
        userService.userManagementList(vm.searchParams).then(function(res){
            vm.userManagementList = res.data.data;
            vm.searchParams.total = res.data.total;
            vm.searchParams.page = res.data.page;
            vm.searchParams.size = res.data.size;
            console.log(res);
        });
        function test(Status){
            if(Status==1){
                return '解冻后该用户账号将继续使用     是否执行解冻操作'
            }
            else if( Status ==2 ){
                return '冻结后该用户账号将   无法登录'
            }
        }

        //冻结和解冻用户
        vm.request = function(id,status){
            $rootScope.confirm(test(status),function(){
                userService.userfrozen(id,status).then(function(res){
                    if(res.data.code === 0 ){
                        $state.go($state.current,{},{reload:true})
                    }
                })
            })
        }
        vm.frozen = function(id,status){
            vm.request(id,status)
        }

        vm.thaw = function(id,status){
             vm.request(id,status)
        }





    }]);