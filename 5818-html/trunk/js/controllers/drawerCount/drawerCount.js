/**
 * Created by john on 2016-07-18.
 */
angular.module("admin")
    .controller('drawerCountController',['$scope', '$state', 'drawerCountService', function($scope, $state, drawerCountService){
        var vm = this;
        if ($state.params.page === undefined) {
            $state.params.page = 1;
        }
        
        vm.searchParams = $state.params;
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        

        drawerCountService.drawerCountList(vm.searchParams).then(function (res) {
            if (res.data.code == 0) {
                vm.total = res.data.data.total;
                $state.params.size = res.data.data.size;
                // $state.params.page = res.data.data.page
                vm.list = res.data.data.data;


            }
        });

        // // 点击跳转传递时间
        // function click(dcs) {
        //     $scope.viewDetails = function (index) {
        //         console.log(dcs.data.data[index].date);
        //         $state.go("field.dayLotteryTypes", {date: dcs.data.data[index].date});
        //
        //     }
        // }


}]);