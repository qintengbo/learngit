'use strict';
angular.module('admin')
    //这是个事例  照着这个格式写
.filter('testFilter', function() {
        return function(id) {
            if (id === 1) {
                return "例子1";
            } else if (id === 2) {
                return "例子2";
            }
            return "";
        }
    })

    //出票的filter
    .filter('ticketFilter',function(ticketFilterCon){
            return function(id){
                if(id!=undefined&&id!=null&id!=''){
                    return ticketFilterCon[id-1].name

                }
            }
    })

    //千分位转换
    .filter('thousandPoints',function(){
        return function(num){
            console.log(typeof num)
            if(typeof num=='string'){
                num = parseInt(num)
                console.log('2')
            }
            return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');

        }
    })


    //获取用户列表-判断是否绑卡
    .filter('userManagementFilter', function(userManagement) {
        return function(id) {
            if (id !=undefined) {
                return userManagement[id-1].name
            }
        }
    })
    .filter('channelPlatform',function(channelPlatformConstant){
            return function(id){
                if(id!=undefined){
                    return channelPlatformConstant[id-2].name

                }
            }
})
    //获取用户列表-判断是否实名
    .filter('verifiedFilter', function(verified) {
        return function(id) {
            if(id!=null&&id!=undefined &&id!=''){
                return verified[id-1].name
            }
        }
    })
    //获取用户列表-用户冻结状态
    .filter('accountstatusFilter', function(accountstatus) {
        return function(id) {
            if(id!=null&&id!=undefined &&id!=''){
                return accountstatus[id-1].name
            }
        }
    })
    //充值渠道
    .filter('recharge', function (rechargeChannel) {
        return function (params) {
            var correct;
            for (var i = 0;i<rechargeChannel.length;i++){
                if (params == rechargeChannel[i].id){
                    correct = rechargeChannel[i].name;
                }
            }
            return correct?correct:"code:"+params
        }
    })
        
    //提现管理-提现审核
    .filter('cashAudit', function (cashAuditStatus) {
        return function (id) {
            if(id!=null&&id!=undefined &&id!=''){

                return cashAuditStatus[id - 1].name
            }
        }
    })

    //提现管理-审核状态
    .filter('cashCheckFilter',function(cashCheckConstant){
        return function(id){
            if(id!=null&&id!=undefined &&id!=''){
                return cashCheckConstant[id-1].name

            }


        }
    })

    //提现部分 处理状态
    .filter('dealStatusFilter',function(dealStatusConstant){
        return function(id){
            if(id!=null&&id!=undefined&&id!='')
            {
                return dealStatusConstant[id-4].name

            }
        }
    })



    //提现管理-提现处理
    .filter('cashHandle', function (cashHandleStatus) {
        return function (id) {
            if(id!=null&&id!=undefined&&id!=''){
                return cashHandleStatus[id-4].name
            }
        }
    })
    //提现审核状态
    .filter('presentAuditState', function (presentAuditState) {
        return function (params) {
            var correct;
            for (var i =0;i<presentAuditState.length;i++){
                if (params === presentAuditState[i].id){
                    correct = presentAuditState[i].name;
                }
            }
            return correct?correct:params
        }
    })
    //提现处理状态
    .filter('presentHandleState', function (presentHandleState) {
        return function (params) {
            var correct;
            for (var i =0;i<presentHandleState.length;i++){
                if (params === presentHandleState[i].id){
                    correct = presentHandleState[i].name;
                }
            }
            return correct?correct:params
        }
    })
        
    //彩种
    .filter('lotteryType',function (lotteryType) {
        return function (params) {
            var name ;
            for (var i = 0; i<lotteryType.length;i++){
                if (params == lotteryType[i].id){
                    name = lotteryType[i].name;
                    break;
                }
            }
            return name;
        }
    })

    //参与条件
    .filter('participationCondition',function(participationCondition){
        return function(id){
           if(id!= undefined){
               return participationCondition[id-1].name

           }

        }
    })

//未转义字符串
.filter('to_trusted', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    }
})

.filter('rechargePathFilter',function(rechargePathConstant){
    return function(id){
        if(id!=undefined){
                return rechargePathConstant[id-1].name
        }
    }
})





;
