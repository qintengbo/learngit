angular.module("admin")
    .directive('search', function () {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/searchParams/search-params.html',
            replace: true,
            scope: {
                params: '='
            },
            controller: function ($state,commonUtil,$scope) {
                //搜索
                $scope.search = function () {
                    $state.go($state.current, commonUtil.querySearchParams($scope.params), {reload: true});
                };
                //清空
                $scope.clean = function () {
                    angular.forEach($scope.params, function (data, index) {
                        if(index !== 'size'){
                            $scope.params[index] = '';
                        }
                    });
                }
            }
        }
    });