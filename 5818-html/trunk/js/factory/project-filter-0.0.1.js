'use strict';
angular.module('admin').filter('testFilter', function () {
    return function (id) {
        if (id === 1) {
            return '\u4f8b\u5b501';
        } else if (id === 2) {
            return '\u4f8b\u5b502';
        }
        return '';
    };
}).filter('ticketFilter', [
    'ticketFilterCon',
    function (ticketFilterCon) {
        return function (id) {
            if (id != undefined && id != null & id != '') {
                return ticketFilterCon[id - 1].name;
            }
        };
    }
]).filter('thousandPoints', function () {
    return function (num) {
        if (typeof num == 'string') {
            num = parseInt(num);
        }
        return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    };
}).filter('userManagementFilter', [
    'userManagement',
    function (userManagement) {
        return function (id) {
            if (id != undefined) {
                return userManagement[id - 1].name;
            }
        };
    }

])
    //用户的提现列表展示用这个
    .filter('userDealList',function(){
            return function(id){
                if(id!=undefined){
                    if(id==4){
                        return "待处理"
                    }
                    else if(id==5){
                        return "成功"
                    }
                    else if(id ==6){
                        return "失败"
                    }
                }
            }
})


    .filter('channelPlatform', [
    'channelPlatformConstant',
    function (channelPlatformConstant) {
        return function (id) {
            if (id != undefined) {
                return channelPlatformConstant[id - 2].name;
            }
        };
    }
]).filter('verifiedFilter', [
    'verified',
    function (verified) {
        return function (id) {
            if (id != null && id != undefined && id != '') {
                return verified[id - 1].name;
            }
        };
    }
]).filter('accountstatusFilter', [
    'accountstatus',
    function (accountstatus) {
        return function (id) {
            if (id != null && id != undefined && id != '') {
                return accountstatus[id - 1].name;
            }
        };
    }
]).filter('recharge', [
    'rechargeChannel',
    function (rechargeChannel) {
        return function (params) {
            var correct;
            for (var i = 0; i < rechargeChannel.length; i++) {
                if (params == rechargeChannel[i].id) {
                    correct = rechargeChannel[i].name;
                }
            }
            return correct ? correct : 'code:' + params;
        };
    }
]).filter('cashAudit', [
    'cashAuditStatus',
    function (cashAuditStatus) {
        return function (id) {
            if (id != null && id != undefined && id != '') {
                return cashAuditStatus[id - 1].name;
            }
        };
    }
]).filter('cashCheckFilter', [
    'cashCheckConstant',
    function (cashCheckConstant) {
        return function (id) {
            if (id != null && id != undefined && id != '') {
                return cashCheckConstant[id - 1].name;
            }
        };
    }
]).filter('dealStatusFilter', [
    'dealStatusConstant',
    function (dealStatusConstant) {
        return function (id) {
            if (id != null && id != undefined && id != '') {
                return dealStatusConstant[id - 4].name;
            }
        };
    }
]).filter('cashHandle', [
    'cashHandleStatus',
    function (cashHandleStatus) {
        return function (id) {
            if (id != null && id != undefined && id != '') {
                return cashHandleStatus[id - 4].name;
            }
        };
    }
]).filter('presentAuditState', [
    'presentAuditState',
    function (presentAuditState) {
        return function (params) {
            var correct;
            for (var i = 0; i < presentAuditState.length; i++) {
                if (params === presentAuditState[i].id) {
                    correct = presentAuditState[i].name;
                }
            }
            return correct ? correct : params;
        };
    }
]).filter('presentHandleState', [
    'presentHandleState',
    function (presentHandleState) {
        return function (params) {
            var correct;
            for (var i = 0; i < presentHandleState.length; i++) {
                if (params === presentHandleState[i].id) {
                    correct = presentHandleState[i].name;
                }
            }
            return correct ? correct : params;
        };
    }
]).filter('lotteryType', [
    'lotteryType',
    function (lotteryType) {
        return function (params) {
            var name;
            for (var i = 0; i < lotteryType.length; i++) {
                if (params == lotteryType[i].id) {
                    name = lotteryType[i].name;
                    break;
                }
            }
            return name;
        };
    }
]).filter('participationCondition', [
    'participationCondition',
    function (participationCondition) {
        return function (id) {
            if (id&&id != undefined) {
                return participationCondition[id - 1].name;
            }
        };
    }
]).filter('to_trusted', [
    '$sce',
    function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
]).filter('rechargePathFilter', [
    'rechargePathConstant',
    function (rechargePathConstant) {
        return function (id) {
            if (id&&id != undefined) {
                return rechargePathConstant[id - 1].name;
            }
        };
    }
]);
;