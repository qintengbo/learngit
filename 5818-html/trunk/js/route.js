'use strict';
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        };
    };
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });
    var versionNum = '006';
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider.state('field', {
        url: '',
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/admin/mainController.js?ver=' + versionNum,
                'js/directives/ptteng-sidebar/ptteng-sidebar-0.0.1.js?ver=' + versionNum,
                'js/directives/ptteng-user/ptteng-user-0.0.1.js?ver=' + versionNum,
                'js/directives/ptteng-paging/pagination.js?ver=' + versionNum,
                'js/directives/numberic/numberic.js?ver=' + versionNum
            ])
        }
    }).state('field.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
    }).state('field.lineRecharge', {
        url: '/lineRecharge',
        templateUrl: 'views/businessProcessing/lineRecharge.html',
        controller: 'lineRecharge',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/lineRecharge.js?ver=' + versionNum)}
    }).state('field.userManagement', {
        url: '/userManagement?id&page&size&mobile&name&alias&startAt&endAt',
        templateUrl: 'views/businessProcessing/userManagement.html',
        controller: 'userManagement',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/businessProcessing/userManagement.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.userDetails', {
        url: '/userDetails?userId&type',
        templateUrl: 'views/businessProcessing/userDetails.html',
        controller: 'userDetails',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/userDetails.js?ver=' + versionNum)}
    }).state('field.prizeMoneyDetail', {
        url: '/prizeMoneyDetail?userId&page&size&showName',
        templateUrl: 'views/businessProcessing/prizeMoneyDetail.html',
        controller: 'prizeMoneyDetail',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/prizeMoneyDetail.js?ver=' + versionNum)}
    }).state('field.redMoneyDetail', {
        url: '/redMoneyDetail?userId&page&size&showName',
        templateUrl: 'views/businessProcessing/redMoneyDetail.html',
        controller: 'redMoneyDetail',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/redMoneyDetail.js?ver=' + versionNum)}
    }).state('field.experienceMoney', {
        url: '/experienceMoney?userId&page&size&showName',
        templateUrl: 'views/businessProcessing/experienceMoney.html',
        controller: 'experienceMoney',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/experienceMoney.js?ver=' + versionNum)}
    }).state('field.orderDetailsPM', {
        url: '/orderDetailsPM?userId&type&page&size&showName',
        templateUrl: 'views/businessProcessing/orderDetailsPM.html',
        controller: 'orderDetailsPM',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/orderDetailsPM.js?ver=' + versionNum)}
    }).state('field.orderDetailsPMDetails', {
        url: '/orderDetailsPMDetails?id',
        templateUrl: 'views/businessProcessing/orderDetailsPMDetails.html',
        controller: 'orderDetailsPMDetails',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/orderDetailsPMDetails.js?ver=' + versionNum)}
    }).state('field.orderDetailsEM', {
        url: '/orderDetailsEM?userId&type&page&size&showName',
        templateUrl: 'views/businessProcessing/orderDetailsEM.html',
        controller: 'orderDetailsEM',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/orderDetailsEM.js?ver=' + versionNum)}
    }).state('field.orderDetailsEMDetails', {
        url: '/orderDetailsEMDetails?id',
        templateUrl: 'views/businessProcessing/orderDetailsEMDetails.html',
        controller: 'orderDetailsEMDetails',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/orderDetailsEMDetails.js?ver=' + versionNum)}
    }).state('field.withdrawalsRecord', {
        url: '/withdrawalsRecord?userId&showName&page&size',
        templateUrl: 'views/businessProcessing/withdrawalsRecord.html',
        controller: 'withdrawalsRecord',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/withdrawalsRecord.js?ver=' + versionNum)}
    }).state('field.rechargeRecord', {
        url: '/rechargeRecord?userId&page&size&showName',
        templateUrl: 'views/businessProcessing/rechargeRecord.html',
        controller: 'rechargeRecord',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/businessProcessing/rechargeRecord.js?ver=' + versionNum)}
    }).state('field.verified', {
        url: '/verified?page&size&mobile&name&idNo&startAt&endAt',
        templateUrl: 'views/businessProcessing/verified.html',
        controller: 'verified',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/businessProcessing/verified.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.tieCardManage', {
        url: '/tieCardManage?page&size&mobile&name&bank&cardNo&startAt&endAt',
        templateUrl: 'views/businessProcessing/tieCardManage.html',
        controller: 'tieCardManage',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/businessProcessing/tieCardManage.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.redSet', {
        url: '/redSet/:page/:size?name&status&createByName&startAt&endAt',
        templateUrl: 'views/parameterSet/redSet.html',
        controller: 'redSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/redSet.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.redSetDetail', {
        url: '/redSetDetail?id',
        templateUrl: 'views/parameterSet/redSetDetail.html',
        controller: 'redSetDetailController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/parameterSet/redSetDetail.js?ver=' + versionNum)}
    }).state('field.luckDrawSet', {
        url: '/luckDrawSet?page&size&prizeName&status&createByName&creatAtStart&creatAtEnd',
        templateUrl: 'views/parameterSet/luckDrawSet.html',
        controller: 'luckDrawSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/luckDrawSet.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.luckDrawDetail', {
        url: '/luckDrawDetail?id',
        templateUrl: 'views/parameterSet/luckDrawDetail.html',
        controller: 'luckDrawDetailController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/parameterSet/luckDrawDetail.js?ver=' + versionNum)}
    }).state('field.lotteryTypeSet', {
        url: '/lotteryTypeSet/:page/:size',
        templateUrl: 'views/parameterSet/lotteryTypeSet.html',
        controller: 'lotteryTypeSetController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/parameterSet/lotteryTypeSet.js?ver=' + versionNum, 'page')}
    }).state('field.lotteryTypeDetail', {
        url: '/lotteryTypeDetail?id',
        templateUrl: 'views/parameterSet/lotteryTypeDetail.html',
        controller: 'lotteryTypeDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/lotteryTypeDetail.js?ver=' + versionNum,
                'angularFileUpload'
            ])
        }
    }).state('field.lotterySkill', {
        url: '/lotterySkill?page&size&title&status&createByName&startAt&endAt',
        templateUrl: 'views/parameterSet/lotterySkill.html',
        controller: 'lotterySkillController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/lotterySkill.js?ver=' + versionNum,
                'search',
                'drop'
            ])
        }
    }).state('field.lotterySkillDetail', {
        url: '/lotterySkillDetail?id',
        templateUrl: 'views/parameterSet/lotterySkillDetail.html',
        controller: 'lotterySkillDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/lotterySkillDetail.js?ver=' + versionNum,
                'um'
            ])
        }
    }).state('field.parameterSet', {
        url: '/parameterSet',
        templateUrl: 'views/parameterSet/parameterSet.html',
        controller: 'parameterSetController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/parameterSet/parameterSet.js?ver=' + versionNum)}
    }).state('field.eventSet', {
        url: '/eventSet/:page/:size?&title&createByName&situation&status&startAt&endAt',
        templateUrl: 'views/parameterSet/eventSet.html',
        controller: 'eventSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/eventSet.js?ver=' + versionNum,
                'search',
                'drop'
            ])
        }
    }).state('field.eventDetail', {
        url: '/eventDetail?id',
        templateUrl: 'views/parameterSet/eventDetail.html',
        controller: 'eventDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/eventDetail.js?ver=' + versionNum,
                'angularFileUpload'
            ])
        }
    }).state('field.bannerSet', {
        url: '/bannerSet/:page/:size?title&status&createByName&startAt&endAt',
        templateUrl: 'views/parameterSet/bannerSet.html',
        controller: 'bannerSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/bannerSet.js?ver=' + versionNum,
                'search',
                'drop'
            ])
        }
    }).state('field.bannerDetail', {
        url: '/bannerDetail?id',
        templateUrl: 'views/parameterSet/bannerDetail.html',
        controller: 'bannerDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/bannerDetail.js?ver=' + versionNum,
                'um',
                'angularFileUpload'
            ])
        }
    }).state('field.versionController', {
        url: '/versionController',
        templateUrl: 'views/parameterSet/versionController.html',
        controller: 'versionControllerCtrl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/versionControllerCtrl.js?ver=' + versionNum,
                'bindHtml'
            ])
        }
    }).state('field.versionControllerDetail', {
        url: '/versionControllerDetail/:id',
        templateUrl: 'views/parameterSet/versionControllerDetail.html',
        controller: 'versionControllerDetailCtrl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/versionControllerDetailCtrl.js?ver=' + versionNum,
                'um'
            ])
        }
    }).state('field.startPageSet', {
        url: '/startPageSet/:page/:size?&title&createByName&startAt&endAt&status',
        templateUrl: 'views/parameterSet/startPageSet.html',
        controller: 'startPageSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/startPageSet.js?ver=' + versionNum,
                'search',
                'drop'
            ])
        }
    }).state('field.startPageDetail', {
        url: '/startPageDetail?id',
        templateUrl: 'views/parameterSet/startPageDetail.html',
        controller: 'startPageDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/startPageDetail.js?ver=' + versionNum,
                'angularFileUpload',
                'um'
            ])
        }
    }).state('field.adviertisementSet', {
        url: '/adviertisementSet/:page/:size?content&createByName&startAt&endAt&status&createBy',
        templateUrl: 'views/parameterSet/adviertisementSet.html',
        controller: 'adviertisementSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/adviertisementSet.js?ver=' + versionNum,
                'search',
                'drop'
            ])
        }
    }).state('field.adviertisementDetail', {
        url: '/adviertisementDetail?id',
        templateUrl: 'views/parameterSet/adviertisementDetail.html',
        controller: 'adviertisementDetailController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/parameterSet/adviertisementDetail.js?ver=' + versionNum)}
    }).state('field.pushSet', {
        url: '/pushSet/:page/:size?&type&title&createByName&status&endAt&startAt',
        templateUrl: 'views/parameterSet/pushSet.html',
        controller: 'pushSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/pushSet.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.pushDetail', {
        url: '/pushDetail?id',
        templateUrl: 'views/parameterSet/pushDetail.html',
        controller: 'pushDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/pushDetail.js?ver=' + versionNum,
                'um'
            ])
        }
    }).state('field.helpAndSkillSet', {
        url: '/helpAndSkillSet/:page/:size/?&title&createByName&status&endAt&startAt',
        templateUrl: 'views/parameterSet/helpAndSkillSet.html',
        controller: 'helpAndSkillSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/helpAndSkillSet.js?ver=' + versionNum,
                'search',
                'drop'
            ])
        }
    }).state('field.helpAndSkillDetail', {
        url: '/helpAndSkillDetail?id',
        templateUrl: 'views/parameterSet/helpAndSkillDetail.html',
        controller: 'helpAndSkillDetailController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/helpAndSkillDetail.js?ver=' + versionNum,
                'um'
            ])
        }
    }).state('field.channelSet', {
        url: '/channelSet?page&size&channelId&platform&createByName&channelName&creatAtStart&creatAtEnd',
        templateUrl: 'views/parameterSet/channelSet.html',
        controller: 'channelSetController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/parameterSet/channelSet.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.channelEdit', {
        url: '/channelEdit?id',
        templateUrl: 'views/parameterSet/channelEdit.html',
        controller: 'channelEditController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/parameterSet/channelEdit.js?ver=' + versionNum)}
    }).state('field.cashAuditControl', {
        url: '/cashAudit/:page/:size?&dealStart&dealStatus&checkStatus&dealEnd&completeStart&completeEnd&status&dealBy&batchNo',
        templateUrl: 'views/cash/cashAudit.html',
        controller: 'cashAuditControl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/cash/cashAudit.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.cashAuditDetailsControl', {
        url: '/cashAuditDetails/:page/:size/:batchNo?presentState&mobile&checkStatus&dealStatus&name&checkMan&bank&cashStart&cashEnd&checkStart&checkEnd',
        templateUrl: 'views/cash/cashAuditDetails.html',
        controller: 'cashAuditDetailsControl',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/cash/cashAuditDetails.js?ver=' + versionNum)}
    }).state('field.cashHandleControl', {
        url: '/cashHandle/:page/:size?&dealStatus&dealStart&dealEnd&completeStart&completeEnd&dealBy&batchNo',
        templateUrl: 'views/cash/cashHandle.html',
        controller: 'cashHandleControl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/cash/cashHandle.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.cashHandleDetailsControl', {
        url: '/cashHandleDetails/:page/:size/:batchNo?&presentState&dealStatus&dealMan&mobile&name&checkMan&bank&cashStart&cashEnd&checkStart&checkEnd',
        templateUrl: 'views/cash/cashHandleDetails.html',
        controller: 'cashHandleDetailsControl',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/cash/cashHandleDetails.js?ver=' + versionNum)}
    }).state('field.LotteryManage', {
        url: '/LotteryManage/:size/:page',
        templateUrl: 'views/lottery/LotteryManage.html',
        controller: 'LotteryManage',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/lottery/LotteryManage.js?ver=' + versionNum)}
    }).state('field.LotteryDetails', {
        url: '/LotteryDetails/:size/:page?typeCode&issue&startAt&endAt',
        templateUrl: 'views/lottery/LotteryDetails.html',
        controller: 'LotteryDetails',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/lottery/LotteryDetails.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.LotteryRedact', {
        url: '/LotteryRedact/:id',
        templateUrl: 'views/lottery/LotteryRedact.html',
        controller: 'LotteryRedact',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/lottery/LotteryRedact.js?ver=' + versionNum)}
    }).state('field.rechargeStatistics', {
        url: '/rechargeStatistics/:page/:size/?&mobile&name&rechargePath&startAt&endAt',
        templateUrl: 'views/recharge/rechargeStatistics.html',
        controller: 'rechargeStatisticsControl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/recharge/rechargeStatistics.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.winCount', {
        url: '/winCount?typeCode&startAt&endAt&page&size&showList',
        templateUrl: 'views/wincount/winCount.html',
        controller: 'winCount',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/winCount/winCount.js?ver=' + versionNum)}
    }).state('field.drawerCount', {
        url: '/drawerCount?page&size&startAt&endAt',
        templateUrl: 'views/drawerCount/drawerCount.html',
        controller: 'drawerCountController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/drawerCount/drawerCount.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.lotteryTypes', {
        url: '/lotteryTypes?page&size&startAt&endAt',
        templateUrl: 'views/drawerCount/lotteryTypes.html',
        controller: 'lotteryTypesController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/drawerCount/lotteryTypes.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.lotteryTypesDetail', {
        url: '/lotteryTypesDetail?page&size&lotteryType&startAt&endAt',
        templateUrl: 'views/drawerCount/lotteryTypesDetail.html',
        controller: 'lotteryTypesDetailController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/drawerCount/lotteryTypesDetail.js?ver=' + versionNum)}
    }).state('field.dayLotteryTypes', {
        url: '/dayLotteryTypes?&page&size&createAt',
        templateUrl: 'views/drawerCount/dayLotteryTypes.html',
        controller: 'dayLotteryTypesController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/drawerCount/dayLotteryTypes.js?ver=' + versionNum)}
    }).state('field.drawerCountDetails', {
        url: '/drawerCountDetails?&page&size&createAt&title&lotteryType&startAt&endAt',
        templateUrl: 'views/drawerCount/drawerCountDetails.html',
        controller: 'drawerCountDetailsController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/drawerCount/drawerCountDetails.js?ver=' + versionNum)}
    }).state('field.channelList', {
        url: '/channelList?page&size&startAt&endAt&lowestCount&channelName',
        templateUrl: 'views/channel/channelList.html',
        controller: 'channelList',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/channel/channelList.js?ver=' + versionNum,
                'search'
            ])
        }
    }).state('field.dayList', {
        url: '/dayList/?pageNo&pageSize&dateStart&dateEnd&channelNo&channelName',
        templateUrl: 'views/channel/dayList.html',
        controller: 'dayList',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/channel/dayList.js?ver=' + versionNum)}
    }).state('field.shoppingList', {
        url: '/shoppingList/?pageNo&pageSize&channelNo&createAt',
        templateUrl: 'views/channel/shoppingList.html',
        controller: 'shoppingList',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/channel/shoppingList.js?ver=' + versionNum)}
    }).state('login', {
        url: '/login',
        templateUrl: 'views/admin/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/loginController.js?ver=' + versionNum)}
    }).state('field.manager', {
        url: '/manager?page',
        templateUrl: 'views/admin/manager.html',
        controller: 'ManagerCtrl',
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/admin/ptteng-managerController-0.0.1.js',
                'js/directives/pwd-check/pwCheck.js?ver=' + versionNum
            ])
        }
    }).state('field.managerDetail', {
        url: '/managerDetail/:id',
        templateUrl: 'views/admin/managerDetail.html',
        controller: 'ManagerDetailCtrl',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/ptteng-managerDetailController-0.0.1.js?ver=' + versionNum)}
    }).state('field.role', {
        url: '/role/:page',
        templateUrl: 'views/admin/role.html',
        controller: 'RoleCtrl',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/ptteng-roleController-0.0.1.js?ver=' + versionNum)}
    }).state('field.roleDetail', {
        url: '/roleDetail/:id',
        templateUrl: 'views/admin/roleDetail.html',
        controller: 'RoleDetailCtrl',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/ptteng-roleDetailController-0.0.1.js?ver=' + versionNum)}
    }).state('field.module', {
        url: '/module?page&size',
        templateUrl: 'views/admin/module.html',
        controller: 'ModuleCtrl',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/ptteng-moduleController-0.0.1.js?ver=' + versionNum)}
    }).state('field.moduleDetail', {
        url: '/moduleDetail/:id',
        templateUrl: 'views/admin/moduleDetail.html',
        controller: 'ModuleDetailCtrl',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/ptteng-moduleDetailController-0.0.1.js?ver=' + versionNum)}
    }).state('field.pwd', {
        url: '/pwd',
        templateUrl: 'views/admin/pwdSetting.html',
        controller: 'PwdCtrl',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/ptteng-pwdController-0.0.1.js?ver=' + versionNum)}
    }).state('field.operatingRecord', {
        url: '/operatingRecord/:operateStart/:operateEnd/:managerName/:operate/:roleID',
        templateUrl: 'views/admin/operatingRecord.html',
        controller: 'operatingRecordCtrl',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/operatingRecordCtrl.js?ver=' + versionNum)}
    }).state('field.recordDetail', {
        url: '/recordDetail/:id',
        templateUrl: 'views/admin/recordDetail.html',
        controller: 'recordDetailCtrl',
        controllerAs: 'vm',
        resolve: {loadMyFile: _lazyLoad('js/controllers/admin/recordDetailCtrl.js?ver=' + versionNum)}
    });
}