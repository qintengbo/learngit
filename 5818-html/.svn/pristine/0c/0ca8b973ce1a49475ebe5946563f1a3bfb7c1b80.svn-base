/**
 * Created by gaogao on 16/7/18.
 */
angular.module("admin").controller('channelSetController', function ($scope, $state,$rootScope, parameterService) {
    var vm = this;
    vm.searchParams = $state.params;
    console.log(vm.searchParams)
    if(vm.searchParams.creatAtStart) vm.searchParams.creatAtStart=parseInt(vm.searchParams.creatAtStart);
    if(vm.searchParams.creatAtEnd) vm.searchParams.creatAtEnd=parseInt(vm.searchParams.creatAtEnd);

    //获取渠道管理列表
    function channelSetList() {
        parameterService.getChannelSetList(vm.searchParams).then(function (res) {
            if(res.data.code==0){
                vm.list = res.data.data;
                vm.totalPage=res.data.total;
                console.log(vm.totalPage)
            }
            else{
                $rootScope.alert(res.data.message)
            }

        })
    }

    channelSetList()


});