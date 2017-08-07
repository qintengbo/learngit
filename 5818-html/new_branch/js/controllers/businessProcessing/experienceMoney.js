/**
 * Created by zhoucc on 2016/7/19.
 */
angular.module("admin").controller('experienceMoney', ['$rootScope','$scope','$state','userService',
    function($rootScope,$scope,$state,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.showName=$state.params.showName
        userService.experienceMoneyList(vm.params.userId,{page:vm.params.page,size:vm.params.size}).then(function(res){
            if(res.data.code==0){
                vm.experienceMoneyList = res.data.data;
                vm.params.page = res.data.page;
                vm.params.size = res.data.size;
                vm.params.total = res.data.total;
                getMoney()
            }
            else{
                $rootScope.alert(res.data.message)
            }

        });
        //根据flag 判断金额的正负
        var getMoney=function(){
            angular.forEach(vm.experienceMoneyList,function(li){
                if(li.flag==1){
                    li.newmoney="+"+li.score
                }
                else if(li.flag == 2){
                    li.newmoney="-"+li.score
                }
                else if (li.flag == ''){
                    li.newmoney = 0
                }
            })
        }

    }]);