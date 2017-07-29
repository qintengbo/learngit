/**
 * Created by qintengbo on 2017/7/1.
 */

'use strict';
angular.module("app", ['ui.bootstrap'])
    .controller("homePagePerson", ['$scope', 'httpService', 'logicService', homePagePerson]);
    function homePagePerson($scope, httpService, logicService) {
        var vm = this;
        // 轮播图设置
        vm.active = 0;
        vm.myInterval = 3000;
        vm.noWrapSlides = false;
        vm.noTransition = false;
        //获取banner
        httpService.getBannerList(0)
            .then(function(response) {
                if(response.data.code === 0) {
                    vm.slides = response.data.data;
                }
                else {
                    alert(response.data.message);
                }
            });
        // 获取职位列表
        httpService.getSearchJob(1, {size: 20})
            .then(function(response) {
                if(response.data.code === 0) {
                    vm.jobs = logicService.newJobRule(response.data.data);
                }
                else {
                    alert(response.data.message);
                }
            });
    }