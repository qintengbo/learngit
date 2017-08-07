/**
 * Created by gaogao on 16/7/22.
 */
angular.module("admin").controller("bannerDetailController",['$scope','$state','parameterService','$rootScope','uploadService','FileUploader','$timeout', function ($scope, $state, parameterService,$rootScope, uploadService, FileUploader,$timeout) {
    var vm = this;
    //banner type为2
    vm.params = {img:[]};
    vm.params.type = 2;
    vm.id = $state.params.id;

    ////um实例化
    //vm.um = UM.getEditor('myEditor');
    //
    //$scope.back = function () {
    //    vm.um.destroy()
    //};

    //当离开这个scope的时候 清除um
    //$scope.$on("$destroy", function() {
    //    $scope.back()
    //})


    vm.selectType=[{name:'彩种',jumpType:3},{name:'活动',jumpType:4},{name:'H5页面',jumpType:2},{name:'无跳转',jumpType:1}]
    vm.activityType=[{name:'注册',type:1},{name:'签到',type:2},{name:'实名',type:3},{name:'绑卡',type:4},{name:'充值',type:5},{name:'购彩',type:6},{name:'摇奖',type:7}]

    //获取彩种列表
    parameterService.getlotteryTypeList().then(function(res){
        if(res.data.code==0){
            vm.lotteryList=res.data.data.list
        }
        else{
            $rootScope.alert(res.data.message)
        }

    })


    FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
        return true;
    };
    vm.uploader = uploadService.uploadFile(FileUploader);
    vm.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        if (status == 200) {
            vm.params.img.push({url:response.data.url});
        }
    };

    //获取banner详情
    function getBannerDetail(){
        parameterService.putArticleDetail(vm.id).then(function(res){
            if(res.data.code==0){
                    vm.params=res.data.data.article
                //vm.um.setContent(vm.params.content);
            }
            else{
                $rootScope.alert(res.data.message)
            }
        })
    }
    if(vm.id){
       getBannerDetail()
    }


    //新增
    $scope.newBanner = function (status) {
            vm.params.status = status;


            parameterService.addArticle(vm.params).then(function (res) {
                if (res.data.code == 0) {
                    $rootScope.alert('新增成功', $state.go('field.bannerSet', {reload: true}));
                }
                else{
                    $rootScope.alert(res.data.message)
                }
            })
    };

    //编辑
    $scope.putBanner = function (status) {

            vm.params.status=status
        if((vm.params.url==null||vm.params.url==undefined) && vm.params.jumpType!=1){
            $rootScope.alert("请完善类型信息")
            return false
        }
            parameterService.putArticle(vm.id,vm.params).then(function (res) {
                if (res.data.code == 0) {
                    $rootScope.alert('编辑成功', $state.go('field.bannerSet', {reload: true}));
                }
                else{
                    $rootScope.alert(res.data.message)
                }
            })

    };

    //分流
    $scope.newOrPut = function (status,invalid) {
        if((!vm.params.url||vm.params.url==null||vm.params.url==undefined) && vm.params.jumpType!=1){
            $rootScope.alert("请完善类型信息")
            return false
        }

        if(invalid){
            vm.error=true;
            $timeout(function(){
                vm.error=false
            },3000)
            return false
        }

            if(vm.id){
                $scope.putBanner(status)
            }
            else{
                $scope.newBanner(status)
            }

    }

}]);