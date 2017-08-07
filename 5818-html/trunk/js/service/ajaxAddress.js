/**
 * Created by gaogao on 16/7/22.
 */
angular.module('admin').factory('pathProject', [
  'commonUtil',
  function (commonUtil) {
    return {
      upload_url: '/a/u/img/1',
      drawerCount_url: '/a/user/issue/statistics',
      dayLotteryTypes_url: '/a/user/issue/lottery',
      drawerCountDetails_url: '/a/user/issue/play',
      lotteryTypes_url: '/a/user/issue/platform',
      lotteryTypeDetailList: '/a/user/issue/platform/play',
      getRedSet: '/a/red/list',
      deleteRed: function (id) {
        return '/a/u/red/' + id;
      },
      newRed: '/a/u/red',
      putRed: function (id) {
        return '/a/u/red/' + id;
      },
      redDetail: function (id) {
        return '/a/red/' + id;
      },
      getLotteryTypeJson: function () {
        return 'js/json/lotteryType.json';
      },
      getLuckLIst: function () {
        return '/a/prize';
      },
      newLuck: '/a/u/prize',
      deleteLuck: function (id) {
        return '/a/u/prize/' + id;
      },
      setLowerLcuk: function (id) {
        return '/a/u/prize/lowest/' + id;
      },
      putLuck: function (id) {
        return '/a/u/prize/' + id;
      },
      getLuckDetail: function (id) {
        return '/a/prize/detail/' + id;
      },
      getlotteryTypeList: '/a/lottery',
      lotteryStartEnd: function (id, status) {
        return '/a/u/lottery/' + id + '/' + status;
      },
      saveLotterySet: function (id) {
        return '/a/u/lottery/' + id;
      },
      getLotteryDetaiol: function (id) {
        return '/a/lottery/detail/' + id;
      },
      saveLotterySort: function () {
        return '/a/u/lottery/order/';
      },
      getArticleList: function () {
        return '/a/u/article';
      },
      addArticle: function () {
        return '/a/u/article';
      },
      deleteArticle: function (id) {
        return '/a/u/article/' + id;
      },
      putArticle: function (id) {
        return '/a/u/article/' + id;
      },
      saveDrop: '/a/u/article/order/',
      putArticleDetail_url: function (id) {
        return '/a/u/article/' + id;
      },
      luckySet: '/a/u/constant/lucky',
      getLuckSet: '/a/constant/lucky',
      scoreMoneySet: '/a/u/constant/score',
      getScoureMoneySet: '/a/constant/score',
      withDrawalsSet: '/a/u/constant/money',
      getWithDrawalsSet: '/a/constant/money',
      getEventList: function () {
        return '/a/u/article';
      },
      getChannelSetList: '/a/channel',
      addChannelSet: '/a/u/channel',
      putChannelSet: function (id) {
        return '/a/u/channel/' + id;
      },
      getChannelDetail: function (id) {
        return '/a/channel/detail/' + id;
      },
      rechargeList_url: '/a/user/recharge/statistic/',
      cashList_url: function (type) {
        return '/a/withdrawal/batch/' + type + '/list';
      },
      cashAuditDetails_url: function (batchNo, type) {
        return '/a/cash/management/check/info/' + type + '/' + batchNo;
      },
      getCashAuditOneDetails: function (id) {
        return '/a/withdrawals/' + id;
      },
      getCashAuditListDetail: function (ids, excel) {
        if (!excel) {
          return '/a/u/withdrawals/list' + commonUtil.concactArrayParam('ids', ids);
        } else {
          return '/a/u/withdrawals/list' + commonUtil.concactArrayParam('ids', ids) + '&excel=' + excel;
        }
      },
      checkCashAuditList: function (type, ids) {
        return '/a/u/withdrawalBatch/' + type + '/submit' + commonUtil.concactArrayParam('ids', ids);
      },
      cashAudit_url: function (type, id) {
        //return "/a/u/cash/management/check/info/" + id
        return '/a/u/cash/management/check/status/' + type + '/' + id;
      },
      cashAuditReason_url: function (id) {
        return '/a/cash/management/check/info/reason/' + id;
      },
      cashHandles_url: function (batchId) {
        return '/a/u/withdrawalBatch/' + batchId + '/submit';
      },
      cashHandle_url: function (id) {
        return '/a/u/admin/cash/management/deal/single/' + id;
      },
      getHandleReason_url: function (id) {
        return '/123/' + id;
      },
      lotteryManageList_url: '/a/issue/list',
      lotteryDetails_url: function (typeCode) {
        return '/a/issue/' + typeCode + '/list';
      },
      lotteryDetailsDemand_url: function (id) {
        return ' /a/issue/' + id;
      },
      lotteryDetailsChange_url: function (id) {
        return '/a/u/issue/' + id;
      },
      winCount_url: function (typeCode) {
        return ' /a/issue/' + typeCode + '/list';
      },
      channelList_url: function () {
        return '/a/channel/statistics';
      },
      dayList_url: function (channelNo) {
        return '/a/channel/statstics/day/' + channelNo;
      },
      shoppingList_url: function (channelNo) {
        return '/a/channel/statstics/bet/' + channelNo;
      },
      userManagementList_url: function () {
        return '/a/user/list';
      },
      userfrozen: function (id, params) {
        return '/a/u/user/status/' + id + '?status=' + params;
      },
      userManagementDetails_url: function (userId) {
        if (!userId) {
          return '/a/user/list/detail/';
        } else {
          return '/a/user/list/detail/' + userId;
        }
      },
      prizeMoneyDetailList_url: function (userId) {
        return '/a/user/money/history/' + userId;
      },
      redMoneyDetailList_url: function (userId) {
        return '/a/user/red/history/' + userId;
      },
      experienceMoneyList_url: function (userId) {
        return ' /a/user/score/history/' + userId;
      },
      rechargeRecordList_url: function (userId) {
        return '/a/user/recharging/' + userId;
      },
      withdrawalsRecordList_url: function (userId) {
        return '/a/user/withdrawals/' + userId;
      },
      orderDetailsList_url: function (type, userId) {
        return '/a/orders/list/' + type + '/' + userId;
      },
      orderDetailsMDetails_url: function (id) {
        return '/a/orders/' + id;
      },
      verifiedList_url: function () {
        return ' /a/user/name/confirm';
      },
      verifiedCancel_url: function (id) {
        return ' /a/u/user/name/confirm/' + id;
      },
      tieCardManageList_url: function () {
        return '/a/bankcard/';
      },
      deltieCardManage_url: function (id) {
        return '/a/u/bankcard/unbind/' + id;
      },
      getBankList: function () {
        return '/a/bank/list';
      },
      lineRecharge_url: function (mobile) {
        return '/a/u/money/history/' + mobile;
      }
    };
  }
]);