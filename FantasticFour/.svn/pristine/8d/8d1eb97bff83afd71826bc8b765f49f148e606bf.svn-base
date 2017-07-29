/**
 * Created by qintengbo on 2017/7/2.
 */

'use strict';
angular.module("app")
    .controller("findElitePerson", ['$scope', 'httpService', 'logicService', findElitePerson]);
    function findElitePerson($scope, httpService, logicService) {
        var vm = this;
        // 轮播图设置
        vm.active = 0;
        vm.myInterval = 3000;
        vm.noWrapSlides = false;
        vm.noTransition = false;
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        // 获取Banner
        httpService.getBannerList(2)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.slides = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
            });
        // 成功案例
        httpService.getCompanyList(1, {size: 8})
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.companyList = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
                if(vm.companyList.length < 8) {
                    vm.Size = 8 - vm.companyList.length;
                    httpService.getCompanyList(0, {size: vm.Size})
                        .then(function(response) {
                            if(response.data.code === 0) {
                                vm.newCompanyList = response.data.data;
                                vm.companyList = vm.companyList.concat(vm.newCompanyList);
                            }
                            else {
                                alert(response.data.message);
                            }
                        });
                }
            });
    }