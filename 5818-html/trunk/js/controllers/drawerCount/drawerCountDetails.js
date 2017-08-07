/**
 * Created by john on 2016-07-18.
 */

angular.module("admin")
    .controller('drawerCountDetailsController',['$scope', '$state', 'drawerCountService', function($scope, $state, drawerCountService){
        var vm = this;

        if ($state.params.page === undefined) {
            $state.params.page = 1;
        }

        vm.searchParams = $state.params;
        var params=angular.copy(vm.searchParams);
        delete params.title;

        vm.title = vm.searchParams.title;
        // console.log(vm.title, $state.params)

            //列表
        drawerCountService.drawerCountDetailsList(params).then(function (res) {

            if (res.data.code == 0) {

                vm.total = res.data.data.total;
                $state.params.size = res.data.data.size;

                vm.list = res.data.data.list;
                
            }
            

        })

}]);