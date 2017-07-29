/**
 * Created by qintengbo on 2017/7/17.
 */

'use strict';
angular.module("app")
    .controller("companyListPerson", ['$scope', '$state', 'httpService', 'logicService', 'searchUtil', 'searchPanel', companyListPerson]);
    function companyListPerson($scope, $state, httpService, logicService, searchUtil, searchPanel) {
        var vm = this;
        vm.params = $state.params;
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        // 判断是否从其他页面跳转
        if($state.params.jp === "true") {
            sessionStorage.removeItem("companyListOptions");
        }
        // 读取本地数据
        vm.option = logicService.judgeStorage(sessionStorage.companyListOptions, searchPanel);
        // 初始化
        vm.paginationConf = {
            pagesLength: 7
        };
        vm.params.page = vm.params.page? vm.params.page : 1;
        // 标签单选
        vm.radioType = searchUtil.radioType;
        // 选中的数据
        vm.data = searchUtil.dataConvert(vm.option);
        // 拼凑字段
        vm.data.page = vm.params.page;
        vm.data.size = 9;
        // 搜索
        vm.search = function() {
            sessionStorage.companyListOptions = JSON.stringify(vm.option);
            $state.go('.', {page: 1, size: 9, jp: false}, {reload: true});
        };
        // 获取公司列表
        httpService.getCompanyList('', vm.data)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.companyList = res.data.data;
                    vm.paginationConf.totalItems = res.data.total;
                }
                else {
                    alert(res.data.message);
                }
                // 404页面
                if(res.data.code < 0 || res.data.data.length === 0) {
                    httpService.getCompanyList(1, {size: 3})
                        .then(function(response) {
                            if(response.data.code === 0) {
                                vm.groomCompany = response.data.data;
                            }
                            else {
                                alert(response.data.message);
                            }
                        });
                }
            });
    }