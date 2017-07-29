/**
 * Created by qintengbo on 2017/7/5.
 */

'use strict';
angular.module("app")
    .controller("searchJobPerson", ['$scope', '$state', 'searchPanel', 'logicService', 'httpService', 'searchUtil', searchJobPerson]);
    function searchJobPerson($scope, $state, searchPanel, logicService, httpService, searchUtil) {
        var vm = this;
        vm.params = $state.params;
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        // 判断是否从其他页面跳转
        if($state.params.jp === "true") {
            sessionStorage.removeItem("optionList");
        }
        // 读取本地存储的数据
        vm.option = logicService.judgeStorage(sessionStorage.optionList, searchPanel);
        // 初始化
        vm.paginationConf = {
            pagesLength: 7
        };
        vm.params.page = vm.params.page? vm.params.page : 1;
        vm.judgeItem = vm.params.judgeItem? vm.params.judgeItem : "";
        // 判断最新还是推荐
        if(vm.judgeItem === "true") {
            vm.title = "最新职位";
            vm.type = 1;
        }
        else if(vm.judgeItem === "false") {
            vm.title = "推荐职位";
            vm.type = 0;
        }
        // 标签多选
        vm.checkboxMulti = searchUtil.checkboxMulti;
        // 时间单选
        vm.radioType = searchUtil.radioType;
        // 选中的数据
        vm.data = searchUtil.dataConvert(vm.option);
        // 拼凑字段
        vm.data.page = vm.params.page;
        vm.data.size = 8;
        vm.data.name = vm.params.name;
        // 搜索
        vm.serach = function() {
            sessionStorage.optionList = JSON.stringify(vm.option);
            $state.go('.', {page: 1, size: 8, name: vm.data.name, jp: false}, {reload: true});
        };
        // 清空
        vm.clear = function() {
            sessionStorage.removeItem("optionList");
            sessionStorage.optionList = JSON.stringify(searchPanel);
            $state.go('.', {page: 1, size: 8, name: '', jp: false}, {reload: true});
        };
        // 获取职位列表
        httpService.getSearchJob(vm.type, vm.data)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.jobList = res.data.data;
                    vm.paginationConf.totalItems = res.data.total;
                    logicService.sprSplit(vm.jobList);
                }
                else {
                    alert(res.data.message);
                }
                // 404页面
                if(res.data.code < 0 || vm.jobList.length === 0) {
                    httpService.getSearchJob('', {size: 3, recommend: 1})
                        .then(function(response) {
                            if(res.data.code === 0) {
                                vm.elitePosition = response.data.data;
                            }
                            else {
                                alert(response.data.message);
                            }
                        });
                }
        });
    }