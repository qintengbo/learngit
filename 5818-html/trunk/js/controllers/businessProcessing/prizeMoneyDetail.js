/**
 * Created by zhoucc on 2016/7/21.
 */
angular.module("admin").controller('prizeMoneyDetail', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.showName=$state.params.showName

        userService.prizeMoneyDetailList(vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
            vm.prizeMoneyDetaillist = res.data.data;

            vm.PMnamemobile = res.data;
            vm.params.page = res.data.page;
            vm.params.size = res.data.size;
            vm.params.total = res.data.total;

            getMoney()
        });

        //根据flag 判断金额的正负
        var getMoney=function(){
            angular.forEach(vm.prizeMoneyDetaillist,function(li){
                if(li.flag==1){
                    li.newmoney="+"+li.money
                }
                else if(li.flag == 2){
                    li.newmoney="-"+li.money
                }
                else if (li.flag == ''){
                    li.newmoney = 0
                }
            })
        }


    }]);