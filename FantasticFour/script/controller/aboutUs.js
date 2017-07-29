/**
 * Created by qintengbo on 2017/7/10.
 */

'use strict';
angular.module("app")
    .controller("aboutUsPerson", ['$scope', '$state', 'logicService', aboutUsPerson]);
    function aboutUsPerson($scope, $state, logicService) {
        var vm = this;
        // 跳转到本页面保持顶部
        logicService.scrollTo(0, 0);
        vm.toggle = $state.params.status !== "false";
    }