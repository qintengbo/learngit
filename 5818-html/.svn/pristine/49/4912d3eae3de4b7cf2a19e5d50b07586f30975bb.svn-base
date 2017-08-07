angular.module("admin").controller('channelEditController',['$rootScope','$scope','$state','parameterService','$timeout', function ($rootScope, $scope, $state, parameterService,$timeout) {
    var vm = this;
    vm.params = {};
    // vm.params.type = $state.params.type;
    vm.id = $state.params.id;

    function getPlatformName(platform){
        var plateform=parseInt(platform);
            var arr= ['全部','Android','iOS','H5'];
        return arr[plateform+1]
    }

    if (!vm.id) {
        //新增渠道
        vm.addChannel = function (invalid) {
            if(invalid){
                vm.error=true
                $timeout(function(){
                    vm.error=false
                },3000)

            }
            else{
                if(vm.params.platform==null||vm.params.platform==undefined){
                    vm.params.platform=2
                }
                vm.params.platformName=getPlatformName(vm.params.platform);

                parameterService.addChannelSet(vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        vm.addChannel = res.data.data;
                        $rootScope.alert("添加成功", $state.go("field.channelSet", {}, {reload: true}));
                    }
                    else {
                        $rootScope.alert(res.data.message);
                    }
                })
            }

        }
    } else {
        //获取渠道详情
        parameterService.getChannelDetail(vm.id).then(function (res) {
            if (res.data.code === 0) {
                vm.params.channelNo = res.data.data.channelNo;
                vm.params.channelName = res.data.data.channelName;
                vm.params.platform=parseInt(res.data.data.platform)

            }
            else {
                $rootScope.alert(res.data.message)
            }
        });
        //编辑渠道
        vm.addChannel = function (valid) {
            if(valid){
                vm.error=true
                $timeout(function(){
                    vm.error=false
                },3000)

            }
            else{
                vm.params.platformName=getPlatformName(vm.params.platform);
                parameterService.putChannelSet(vm.id,vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert("修改成功", $state.go("field.channelSet", {}, {reload: true}));
                    }
                    else {
                        $rootScope.alert(res.data.message);
                    }
                })
            }

        }
    }
}]);