/**
 * Created by qintengbo on 2017/7/1.
 */

'use strict';
angular.module("app", ['ui.bootstrap'])
    .controller("findJobPerson", ['$scope', 'httpService', 'logicService', findJobPerson]);
    function findJobPerson($scope, httpService, logicService) {
        var vm = this;
        vm.newCompany = [];
        delete sessionStorage.jobOptions;
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        // 轮播图设置
        vm.active = 0;
        vm.myInterval = 3000;
        vm.noWrapSlides = false;
        // 侧边栏职位分类数据
        httpService.getJobType()
            .then(function(response) {
                if(response.data.code === 0) {
                    vm.listOne = response.data.data[0];
                    vm.listTwo = response.data.data[1];
                    vm.listTrd = response.data.data[2];
                }
            });
        // 轮播图
        httpService.getBannerList(1)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.slides = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
            });
        // 推荐职位
        httpService.getSearchJob(0, {size: 8})
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.groomJob = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
            });
        // 最新职位
        httpService.getSearchJob(1, {size: 8})
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.newest = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
            });
        // 推荐和最新切换
        $scope.exchangeJob = function(isChoose) {
            if(isChoose === undefined || isChoose === false) {
                vm.isChoose = !vm.isChoose;
            }
        };
        // 获取公司列表
        // 认证公司
        httpService.getCompanyList(1, {returnFlag: 1})
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.BSCI = [];
                    vm.BSCI[0] = res.data.data[0];
                    vm.newCompany = res.data.data.slice(0, 4);
                }
                else {
                    alert(res.data.message);
                }
            });
        // 普通公司
        httpService.getCompanyList(0, {size: 8})
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.commonCompany = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
            });
    }