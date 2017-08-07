/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('tieCardManage', ['$rootScope', '$scope', '$state', 'userService',
    function ($rootScope, $scope, $state, userService) {
        var vm = this;
        vm.params = $state.params;
        vm.searchParams = $state.params;
        vm.size = 10;
        //初始化
        !(function () {
            vm.searchParams.startAt = e(vm.searchParams.startAt);
            vm.searchParams.endAt = e(vm.searchParams.endAt);
            vm.totalRecharge = 0;
            function e(e){if(e)return e*1}
        })();


        //获取筛选部分银行列表
        userService.getBankList().then(function(res){
            if(res.data.code==0){
                vm.bankList=res.data.data.list
                console.log(vm.bankList)
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })


        userService.tieCardManageList(vm.searchParams).then(function (res) {

            if (res.data.code === 0) {
                vm.tieCardManageList = res.data.data;

            } else {
                $rootScope.alert(res.data.message);
            }
            vm.searchParams.total = res.data.total;
            vm.searchParams.page = res.data.page;
            vm.searchParams.size = res.data.size;

        });





        $scope.deletever = function(id,index){
            $rootScope.confirm("您确定要解除绑定？",function(){
                userService.deltieCardManage(id).then(function(res){
                    if (res.data.code === 0 ){
                        $rootScope.alert("已成功解除",function(){
                            vm.tieCardManageList.splice(index,1)
                        })
                    }
                })
            })
        }
    }]);