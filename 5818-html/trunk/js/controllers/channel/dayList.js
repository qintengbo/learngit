angular.module("admin").controller('dayList', ['$rootScope','$scope','$state','channelListService',
    function($rootScope,$scope,$state,channelListService) {
        var vm = this;
        vm.params = $state.params;
        channelListService.dayList(vm.params.channelNo,vm.params).then(function (res) {
            if(res.data.code === 0){
                vm.dayList = res.data.data.list;
                vm.params.total = res.data.data.total;
                vm.params.size = res.data.data.size;
                vm.params.page = res.data.data.page;
            }
            else {
                $rootScope.alert(res.data.message);
            }
        })

    }]);