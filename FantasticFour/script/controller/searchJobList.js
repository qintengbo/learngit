/**
 * Created by qintengbo on 2017/7/13.
 */

'use strict';
angular.module("app")
    .controller("searchJobListPerson", ['$scope', '$state', 'httpService', 'logicService', 'searchPanel', 'searchUtil', searchJobListPerson]);
    function searchJobListPerson($scope, $state, httpService, logicService, searchPanel, searchUtil) {
        var vm = this;
        vm.params = $state.params;
        var searchPanelCopy = angular.copy(searchPanel);
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        // 判断是否从其他页面跳转
        if($state.params.jp === "true") {
            sessionStorage.removeItem("jobOptions");
        }
        // 读取本地数据
        vm.option = logicService.judgeStorage(sessionStorage.jobOptions, searchPanelCopy);
        // 初始化
        vm.paginationConf = {
            pagesLength: 7
        };
        vm.params.page = vm.params.page? vm.params.page : 1;
        // 选中从其他页面传来的二级类目信息
        if($state.params.type) {
            vm.option.category[0].choose = false;
            vm.option.category[parseInt($state.params.type)].choose = true;
        }
        vm.selectSubCategoryFn = function (index) {
            // 判断选中的数量
            vm.selectNum = logicService.selectedNum(vm.option.category);
            // 判断需要展开详情的类目
            vm.showCategoryNum = logicService.judgeShowCategoryDetail(vm.option.category);
            // 展开三级类目
            if(index > 0 && vm.showCategoryNum > 0 && vm.selectNum < 2) {
                vm.option.subCategory = searchPanelCopy.subCategory[vm.showCategoryNum - 1].data;
            }
            // 清除三级类目数据
            else if(index === 0 || vm.showCategoryNum === 0 || vm.selectNum > 1) {
                vm.option.subCategory = [];
            }
        };
        vm.selectSubCategoryFn(parseInt($state.params.type) + 1);
        // 选中从其他页面传来的三级类目信息
        if ($state.params.subType && vm.option.subCategory.length > 0) {
            vm.option.subCategory[0].choose = false;
            vm.option.subCategory[parseInt($state.params.subType)].choose = true;
        }
        // 选中的数据
        vm.data = searchUtil.dataConvert(vm.option);
        // 存入本地
        sessionStorage.jobOptions = JSON.stringify(vm.option);
        // 数据组装
        vm.data.name = vm.params.name;
        vm.data.page = vm.params.page;
        vm.data.size = 10;
        // 标签单选
        vm.radioType = searchUtil.radioType;
        vm.checkboxMulti = searchUtil.checkboxMulti;
        // 搜索
        vm.search = function() {
            sessionStorage.jobOptions = JSON.stringify(vm.option);
            $state.go('.', {page: 1, size: 10, name: vm.data.name, type: null, subType: null, jp: false}, {reload: true});
        };
        // 清空
        vm.clear = function() {
            sessionStorage.removeItem("jobOptions");
            sessionStorage.jobOptions = JSON.stringify(searchPanelCopy);
            $state.go('.', {page: 1, size: 10, name: '', type: null, subType: null, jp: false}, {reload: true});
        };
        // 获取职位列表
        httpService.getSearchJob('', vm.data)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.plainJobList = res.data.data;
                    vm.paginationConf.totalItems = res.data.total;
                    logicService.sprSplit(vm.plainJobList);
                }
                else {
                    alert(res.data.message);
                }
                // 404页面
                if(res.data.code < 0 || vm.plainJobList.length === 0) {
                    httpService.getSearchJob('', {size: 3, recommend: 1})
                        .then(function(response) {
                            if(response.data.code === 0) {
                                vm.eliteJob = response.data.data;
                            }
                            else {
                                alert(response.data.message);
                            }
                        });
                }
            });
    }