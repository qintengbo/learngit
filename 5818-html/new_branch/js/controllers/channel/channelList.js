angular.module("admin").controller('channelList', ['$rootScope','$scope','$state','channelListService',
    function($rootScope,$scope,$state,channelListService) {
        var vm = this;
        vm.params = $state.params;

        channelListService.channelList(vm.params).then(function (res) {
            if(res.data.code === 0){
                vm.data=res.data.data.list;
                vm.totalPage=res.data.data.total;
            }
            else {
                $rootScope.alert(res.data.message);
            }
        })
    }]);
