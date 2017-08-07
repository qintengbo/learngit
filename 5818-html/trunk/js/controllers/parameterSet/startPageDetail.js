/**
 * Created by gaogao on 16/7/22.
 */
angular.module("admin").controller("startPageDetailController",['$scope','$rootScope','$state','uploadService','FileUploader','parameterService','$timeout', function ($scope, $rootScope, $state, uploadService, FileUploader, parameterService,$timeout) {
    var vm = this;
    vm.params = {};
    vm.params.type = 7;
    vm.id = $state.params.id;


    FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
        return true;
    };
    vm.uploader = uploadService.uploadFile(FileUploader);
    vm.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        if (status == 200) {
            vm.params.img = response.data.url;
        }
    };

    if (!vm.id) {
        //新增
        vm.newStartPage = function (status,invalid) {
            if(invalid){
                vm.error=true;
                $timeout(function(){
                vm.error=false;
                },3000)
            }
            else{
                vm.params.status = status;
                parameterService.addArticle(vm.params).then(function (res) {
                    if (res.data.code == 0) {
                        $state.go("field.startPageSet", {}, {reload: true})
                    }
                    else {
                        $rootScope.alert(res.data.message)
                    }
                })
            }

        };
    }
    else {
        //查询详细信息
        parameterService.putArticleDetail(vm.id).then(function (res) {
            if (res.data.code === 0) {
                vm.params = res.data.data.article;
                // vm.um.setContent(vm.params.content);
            }
            else {
                $rootScope.alert(res.data.message)
            }
        });
        //编辑
        vm.newStartPage = function (status,invalid) {
            if(invalid){
                vm.error=true;
                $timeout(function(){
                    vm.error=false;
                },3000)
            }
            else{
                vm.params.status = status;
                parameterService.putArticle(vm.id, vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $state.go("field.startPageSet", {}, {reload: true})
                    }
                    else {
                        $rootScope.alert(res.data.message);
                    }
                })
            }

        }
    }


}]);