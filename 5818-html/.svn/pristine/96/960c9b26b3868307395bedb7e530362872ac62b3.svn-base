/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('verified', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.searchParams=$state.params;
        vm.size = 10;
        // 初始化参数
        !(function () {
            vm.searchParams.startAt = e(vm.searchParams.startAt);
            vm.searchParams.endAt = e(vm.searchParams.endAt);
            vm.totalRecharge = 0;
            function e(e){if(e)return e*1}
        })();
        console.log(vm.searchParams.idNo);
        //获取身份证列表
        userService.verifiedList(vm.params).then(function (res){
            if (res.data.code === 0){
                vm.verifiedList=res.data.data
            }
            else {
                alert(res.data.code);
            }



            vm.searchParams.total = res.data.total;
            vm.searchParams.page = res.data.page;
            vm.searchParams.size = res.data.size;


        })


        $scope.deletever = function(id,index){
            $rootScope.confirm("您确定要取消改用户的实名认证？",function(res){
               userService.verifiedCancel(id).then(function(res){
                   if (res.data.code === 0 ){
                       $rootScope.alert("已成功取消",
                       function(){
                           vm.verifiedList.splice(index,1)
                       }
                       )
                   }
               })
            })
        }



    }]);