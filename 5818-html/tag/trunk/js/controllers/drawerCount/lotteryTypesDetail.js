/**
 * Created by gaogao on 16/9/2.
 */
angular.module("admin").controller('lotteryTypesDetailController',function($state,drawerCountService){
        vm=this;
        vm.searchParams=$state.params;

    //获取某彩种玩法统计
    drawerCountService.lotteryTypeDetailList(vm.searchParams).then(function(res){
        if(res.data.code==0){
            console.log(res)
                vm.data=res.data.data.list;
                vm.total=res.data.data.total

        }
    })




})