/**
 * Created by john on 2016-07-18.
 */
angular.module("admin")
    .controller('dayLotteryTypesController',['$scope', '$state', 'drawerCountService', function($scope, $state, drawerCountService){
        var vm = this;

        vm.searchParams = $state.params;
        vm.searchParams.createAt=parseInt(vm.searchParams.createAt);

        drawerCountService.dayLotteryTypesList(vm.searchParams).then(function (res) {

            if (res.data.code == 0) {

                vm.total = res.data.data.total;
                $state.params.size = res.data.data.size;
                // $state.params.page = res.data.data.page
                vm.list = res.data.data.list;
            }
        })

        $scope.viewDetails = function () {
            $state.go("field.drawerCountDetails",{title:"国信彩统计"});
        }

    }]);