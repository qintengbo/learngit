/**
 * Created by qintengbo on 2017/7/17.
 */

'use strict';
angular.module("app")
    .controller("companyDetailsPerson", ['$scope', '$state', 'httpService', 'logicService', companyDetailsPerson]);
    function companyDetailsPerson($scope, $state, httpService, logicService) {
        var vm = this;
        vm.id = $state.params.id;
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        // 获取公司信息
        httpService.getCompanyDetils(vm.id)
            .then(function(res) {
                if(res.data.code === 0) {
                    vm.data = res.data.data;
                }
                else {
                    alert(res.data.message);
                }
            });
    }