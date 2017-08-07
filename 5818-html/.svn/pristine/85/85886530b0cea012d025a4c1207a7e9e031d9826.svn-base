angular.module("admin").controller('dayList', ['$rootScope','$scope','$state','channelListService',
    function($rootScope,$scope,$state,channelListService) {
        var vm = this;
        vm.params = $state.params;
        console.log(vm.params);
        channelListService.dayList(vm.params.channelNo,vm.params).then(function (res) {
            if(res.data.code === 0){
                console.log(res);
                vm.dayList = res.data.data.list;
                console.log(vm.dayList);
                vm.params.total = res.data.data.total;
                vm.params.size = res.data.data.size;
                vm.params.page = res.data.data.page;
            }
            else {
                $rootScope.alert(res.data.message);
            }
            console.log(vm.dayList);
            console.log(vm.params);
        })

    }]);