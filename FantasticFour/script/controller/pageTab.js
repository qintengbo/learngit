/**
 * Created by qintengbo on 2017/7/11.
 */

'use strict';
angular.module("app", ['ui.bootstrap'])
    .controller("pageTabPerson", ['$scope', '$rootScope', '$uibModal', '$state', pageTabPerson]);
    function pageTabPerson($scope, $rootScope, $uibModal, $state) {
        var vm = this;
        $rootScope.$state = $state;
        vm.chooseCity = JSON.parse(sessionStorage.getItem("city"));
        vm.city = vm.chooseCity? vm.chooseCity : "北京站";
        vm.choiceCity = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'vm',
                size: 'SM',
                resolve: {
                    items: function () {
                        return vm.city;
                    }
                }
            });
            modalInstance.result.then(function(itemCity) {
                sessionStorage.setItem("city", JSON.stringify(itemCity));
                $state.go('.', {}, {reload: true});
            });
        };
    }

// 模态框单独控制器
angular.module('app').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var vm = this;
    vm.city = items;
    vm.bjCity = function () {
        vm.city = "北京站";
        $uibModalInstance.close(vm.city);
    };
    vm.country = function() {
        vm.city = "全国站";
        $uibModalInstance.close(vm.city);
    };
});
