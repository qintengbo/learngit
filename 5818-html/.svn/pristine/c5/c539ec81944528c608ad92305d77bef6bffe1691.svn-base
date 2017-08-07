/**
 * Created by gaogao on 16/7/20.
 */
angular.module("admin").controller('pushDetailController',['$rootScope','$scope','$state','parameterService','$timeout', function ($rootScope, $scope, $state, parameterService, $timeout) {
    var vm = this;
    vm.params = {}
    //push管理type 为4
    vm.params.type = 4;
    if (vm.params.personType == '' || vm.params.personType == undefined) vm.params.personType = 1;
    if ($state.params.id) {
        vm.params.id = $state.params.id;
    }




    ////um实例化
    //vm.um = UM.getEditor('myEditor');
    //$scope.back = function () {
    //    vm.um.destroy()
    //};

    ////当离开这个scope的时候 清除um
    //$scope.$on("$destroy", function() {
    //    $scope.back()
    //})

    if (!vm.params.id) {
        //push新增
        vm.addPush = function (status, invalid) {
            if (invalid) {
                vm.error = true;
                $timeout(function () {
                    vm.error = false
                }, 3000)
            }
            else {
                //检查时间是否小于现在的事件
                if(vm.params.pushAt<$rootScope.nowDate){
                    $rootScope.alert("定时推送时间不能晚于当前时间!");
                    return false
                }

                else{
                    vm.params.status = status;
                    parameterService.addArticle(vm.params).then(function (res) {
                        if (res.data.code === 0) {
                            // vm.params = res.data.data.list;
                            $rootScope.alert("添加成功", $state.go("field.pushSet", {}, {reload: true}));
                        }
                        else {
                            $rootScope.alert(res.data.message);
                        }
                    })
                }

            }


        }
    } else {
        //push获取信息
        parameterService.putArticleDetail(vm.params.id).then(function (res) {
            if (res.data.code === 0) {
                vm.params = res.data.data.article;
            }
        });
        //push编辑
        vm.addPush = function (status, invalid) {
            if (invalid) {
                vm.error = true;
                $timeout(function () {
                    vm.error = false
                }, 3000)
            }
            else {
                //检查时间是否小于现在的事件
                if(vm.params.pushAt<$rootScope.nowDate){
                    $rootScope.alert("定时推送时间不能晚于当前时间!");
                    return false
                }
                else{
                    vm.params.status = status;
                    parameterService.putArticle(vm.params.id, vm.params).then(function (res) {
                        if (res.data.code === 0) {
                            $rootScope.alert("修改成功", $state.go("field.pushSet", {}, {reload: true}));
                        }
                        else {
                            $rootScope.alert(res.data.message);
                        }
                    })
                }

            }

        }


    }

}]);