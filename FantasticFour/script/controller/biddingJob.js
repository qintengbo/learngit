/**
 * Created by qintengbo on 2017/7/17.
 */

'use strict';
angular.module("app")
    .controller("biddingJobPerson", ['$scope', '$state', 'httpService', 'biddingJobPanel', 'logicService', 'searchUtil', biddingJobPerson]);
    function biddingJobPerson($scope, $state, httpService, biddingJobPanel, logicService, searchUtil) {
        var vm = this;
        vm.params = $state.params;
        // 读取本地存储数据
        vm.option = logicService.judgeStorage(sessionStorage.biddingOptions, biddingJobPanel);
        // 初始化
        vm.paginationConf = {
            pagesLength: 7
        };
        vm.params.page = vm.params.page? vm.params.page : 1;
        // 选中的数据
        vm.data = searchUtil.dataConvert(vm.option);
        // 标签单选
        $scope.radioType = searchUtil.radioType;
        // 数据组装
        vm.data.page = vm.params.page;
        vm.data.size = 10;
        vm.data.companyId = vm.params.id;
        // 搜索
        vm.search = function() {
            sessionStorage.biddingOptions = JSON.stringify(vm.option);
            $state.go('.', {page: 1, size: 10}, {reload: true});
        };
        // 获取在招职位
        httpService.getSearchJob('', vm.data)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.biddingJobList = res.data.data;
                    vm.totalNum = res.data.total;
                    vm.paginationConf.totalItems = res.data.total;
                }
                else {
                    alert(res.data.message);
                }
            });
    }
