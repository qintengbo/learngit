angular.module("admin").controller('winCount', ['$rootScope','$scope','$state','wincountService','parameterService',
    function($rootScope,$scope,$state,wincountService,parameterService) {
        var vm = this;
        vm.params = $state.params;
        if(vm.params.startAt !=null&&vm.params.startAt !=undefined){
            vm.params.startAt = parseInt($state.params.startAt);
        }
        if(vm.params.startAt !=null && vm.params.startAt !=undefined){
            vm.params.endAt = parseInt($state.params.endAt);
        }
        //控制是否显示列表
        vm.params.showList=!!$state.params.showList;
        //控制是否显示头部的彩种以及时间
        vm.heading = false;
        if(!vm.choseArr){
            vm.choseArr={
                type:$state.params.typeCode,
                startAt:$state.params.startAt,
                endAt:$state.params.endAt
            };
        }







        //获取彩票种类列表列表
        function getlotteryTypeList(){
            parameterService.getlotteryTypeList().then(function(res){
                if(res.data.code==0){
                    vm.list=res.data.data.list;
                }
                else{
                    $rootScope.alert(res.data.message)
                }

            })
        }
        getlotteryTypeList();


        //获取中奖统计列表
        wincountService.winCount(vm.params.typeCode,vm.params).then(function (res) {
            if(res.data.code == 0){
                vm.params.page=$state.params.page||1;
                vm.params.size=$state.params.size||10;
                vm.winCount = res.data.data.data;
                console.log(vm.winCount);
                vm.choseArr.type=vm.params.typeCode;
                vm.choseArr.startAt=vm.params.startAt;
                vm.choseArr.endAt=vm.params.endAt;
                console.log(vm.choseArr);
                vm.total=res.data.data.total;
                console.log(vm.total);
                vm.heading = true;
            }
            else {
                $rootScope.alert(res.data.message);
            }
        })




        vm.search =function () {
            vm.params.showList=true;
            $state.go($state.current,vm.params,{reload:true})
          };
        //if($state.params.typeCode){
        //    vm.search()
        //}
        vm.clear = function () {
            vm.params.typeCode = '';
            vm.params.startAt = "";
            vm.params.endAt = "";
            vm.heading = false;
        }

    }]);