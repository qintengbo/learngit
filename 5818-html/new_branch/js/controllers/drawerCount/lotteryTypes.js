/**
 * Created by john on 2016-07-18.
 */
angular.module("admin")
    .controller('lotteryTypesController',['$scope', '$state', 'drawerCountService', function($scope, $state, drawerCountService){
        var vm = this;
        if ($state.params.page === undefined) {
            $state.params.page = 1;
        }
        vm.searchParams = $state.params;
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        drawerCountService.lotteryTypesList(vm.searchParams).then(function (res) {
            if (res.data.code == 0) {
                vm.list = res.data.data.list;
                vm.total = res.data.data.total;
                $state.params.size = res.data.data.size;
            }
        });
        
        // $scope.viewDetails = function () {
        //     $state.go("field.drawerCountDetails",{title: "玩法总计"});
        // }

    }]);