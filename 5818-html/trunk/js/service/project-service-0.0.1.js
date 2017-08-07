'use strict';
angular.module('admin').factory('userService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    return {
      lineRecharge: function (mobile, params) {
        return $http({
          url: pathProject.lineRecharge_url(mobile),
          method: 'post',
          headers: { 'Content-type': 'application/x-www-form-urlencoded' },
          transformRequest: function (data, headersGetter) {
            return $.param(data);
          },
          data: params
        });
      },
      userManagementList: function (params) {
        return $http.get(pathProject.userManagementList_url(), { params: params });
      },
      userfrozen: function (id, params) {
        return $http.put(pathProject.userfrozen(id, params));
      },
      userManagementDetails: function (userId, params) {
        return $http.get(pathProject.userManagementDetails_url(userId), params);
      },
      prizeMoneyDetailList: function (userId, params) {
        return $http.get(pathProject.prizeMoneyDetailList_url(userId), { params: params });
      },
      redMoneyDetailList: function (userId, params) {
        return $http.get(pathProject.redMoneyDetailList_url(userId), { params: params });
      },
      experienceMoneyList: function (userId, params) {
        return $http.get(pathProject.experienceMoneyList_url(userId), { params: params });
      },
      rechargeRecordList: function (userId, params) {
        return $http.get(pathProject.rechargeRecordList_url(userId), { params: params });
      },
      withdrawalsRecordList: function (userId, params) {
        return $http.get(pathProject.withdrawalsRecordList_url(userId), { params: params });
      },
      orderDetailsList: function (type, userId, params) {
        return $http.get(pathProject.orderDetailsList_url(type, userId), { params: params });
      },
      orderDetailsMDetails: function (id) {
        return $http.get(pathProject.orderDetailsMDetails_url(id));
      },
      verifiedList: function (params) {
        return $http.get(pathProject.verifiedList_url(), { params: params });
      },
      verifiedCancel: function (id, params) {
        return $http.delete(pathProject.verifiedCancel_url(id, params));
      },
      tieCardManageList: function (params) {
        return $http.get(pathProject.tieCardManageList_url(), { params: params });
      },
      deltieCardManage: function (id) {
        return $http.delete(pathProject.deltieCardManage_url(id));
      },
      getBankList: function () {
        return $http.get(pathProject.getBankList());
      }
    };
  }
]).factory('drawerCountService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    return {
      drawerCountList: function (params) {
        return $http.get(pathProject.drawerCount_url, { params: params });
      },
      dayLotteryTypesList: function (params) {
        return $http.get(pathProject.dayLotteryTypes_url, { params: params });
      },
      drawerCountDetailsList: function (params) {
        return $http.get(pathProject.drawerCountDetails_url, { params: params });
      },
      lotteryTypesList: function (params) {
        return $http.get(pathProject.lotteryTypes_url, { params: params });
      },
      lotteryTypeDetailList: function (params) {
        return $http.get(pathProject.lotteryTypeDetailList, { params: params });
      }
    };
  }
]).factory('parameterService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    return {
      getRedSet: function (params) {
        return $http.get(pathProject.getRedSet, { params: params });
      },
      deleteRed: function (id, parmas) {
        return $http.delete(pathProject.deleteRed(id), parmas);
      },
      newRed: function (params) {
        return $http.post(pathProject.newRed, params);
      },
      putRed: function (id, params) {
        return $http.put(pathProject.putRed(id), params);
      },
      redDetail: function (id) {
        return $http.get(pathProject.redDetail(id));
      },
      getLotteryTypeJson: function () {
        return $http.get(pathProject.getLotteryTypeJson());
      },
      getLuckLIst: function (params) {
        return $http.get(pathProject.getLuckLIst(), { params: params });
      },
      newLuck: function (params) {
        return $http.post(pathProject.newLuck, params);
      },
      deleteLuck: function (id) {
        return $http.delete(pathProject.deleteLuck(id));
      },
      setLowerLcuk: function (id) {
        return $http.put(pathProject.setLowerLcuk(id));
      },
      putLuck: function (id, params) {
        return $http.put(pathProject.putLuck(id), params);
      },
      getLuckDetail: function (id) {
        return $http.get(pathProject.getLuckDetail(id));
      },
      getlotteryTypeList: function (params) {
        return $http.get(pathProject.getlotteryTypeList, { params: params });
      },
      lotteryStartEnd: function (id, status) {
        return $http.put(pathProject.lotteryStartEnd(id, status));
      },
      saveLotterySet: function (id, parmas) {
        return $http.put(pathProject.saveLotterySet(id), parmas);
      },
      getLotteryDetaiol: function (id) {
        return $http.get(pathProject.getLotteryDetaiol(id));
      },
      saveLotterySort: function (params) {
        return $http({
          url: pathProject.saveLotterySort(),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(params),
          transformRequest: function (data, headersGetter) {
            return data;
          }
        });
      },
      getArticleList: function (params) {
        return $http.get(pathProject.getArticleList(), { params: params });  // return $http.get(pathProject.getArticleList,{params:params})
      },
      addArticle: function (params) {
        return $http.post(pathProject.addArticle(), params);
      },
      deleteArticle: function (id) {
        return $http.delete(pathProject.deleteArticle(id));
      },
      putArticleDetail: function (id) {
        return $http.get(pathProject.putArticleDetail_url(id));
      },
      putArticle: function (id, params) {
        return $http.put(pathProject.putArticle(id), params);
      },
      saveDrop: function (params) {
        return $http({
          url: pathProject.saveDrop,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(params),
          transformRequest: function (data, headersGetter) {
            return data;
          }
        });
      },
      luckySet: function (params) {
        return $http.post(pathProject.luckySet, params);
      },
      getLuckSet: function () {
        return $http.get(pathProject.getLuckSet);
      },
      scoreMoneySet: function (params) {
        return $http.post(pathProject.scoreMoneySet, params);
      },
      getScoureMoneySet: function () {
        return $http.get(pathProject.getScoureMoneySet);
      },
      withDrawalsSet: function (params) {
        return $http.post(pathProject.withDrawalsSet, params);
      },
      getWithDrawalsSet: function () {
        return $http.get(pathProject.getWithDrawalsSet);
      },
      getEventList: function (params) {
        return $http.get(pathProject.getEventList, { params: params });
      },
      getChannelSetList: function (params) {
        return $http.get(pathProject.getChannelSetList, { params: params });
      },
      addChannelSet: function (params) {
        return $http.post(pathProject.addChannelSet, params);
      },
      putChannelSet: function (id, params) {
        return $http.put(pathProject.putChannelSet(id), params);
      },
      getChannelDetail: function (id) {
        return $http.get(pathProject.getChannelDetail(id));
      }
    };
  }
]).factory('rechargeService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    return {
      rechargeList: function (params) {
        return $http.get(pathProject.rechargeList_url, { params: params });
      }
    };
  }
]).factory('cashService', [
  '$http',
  'pathProject',
  'commonUtil',
  function ($http, pathProject, commonUtil) {
    return {
      cashList: function (params, type) {
        return $http.get(pathProject.cashList_url(type), { params: params });
      },
      cashDetails: function (batchNo, type, params) {
        return $http.get(pathProject.cashAuditDetails_url(batchNo, type), { params: params });
      },
      getCashAuditOneDetails: function (id) {
        return $http.get(pathProject.getCashAuditOneDetails(id));
      },
      getCashAuditListDetail: function (ids, excel) {
        return $http.get(pathProject.getCashAuditListDetail(ids, excel));
      },
      checkCashAuditList: function (params) {
        return $http.put(pathProject.checkCashAuditList(params.type, params.ids), params);
      },
      cashAudit: function (params) {
        return $http.put(pathProject.cashAudit_url(params.type, params.withdrawalsId), params);
      },
      getAuditReason: function (id) {
        return $http.get(pathProject.cashAuditReason_url(id));
      },
      cashHandles: function (batchId) {
        return $http.post(pathProject.cashHandles_url(batchId));
      },
      cashHandle: function (params) {
        return $http.post(pathProject.cashHandle_url(params));
      },
      getHandleReason: function (id) {
        return $http.get(pathProject.getHandleReason_url(id));
      }
    };
  }
]).factory('uploadService', [
  'pathProject',
  function (pathProject) {
    return {
      uploadFile: function (FileUploader, alias) {
        var param = { url: pathProject.upload_url };
        if (alias) {
          angular.extend(param, { alias: alias });
        }
        return new FileUploader(param);
      }
    };
  }
]).factory('lotteryService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    return {
      LotteryList: function (params) {
        return $http.get(pathProject.lotteryManageList_url, { params: params });
      },
      LotteryDetails: function (params, typeCode) {
        return $http.get(pathProject.lotteryDetails_url(typeCode), { params: params });
      },
      LotteryDetailsDemand: function (params) {
        return $http.get(pathProject.lotteryDetailsDemand_url(params.id));
      },
      LotteryDetailsChange: function (params, id) {
        return $http.put(pathProject.lotteryDetailsChange_url(id), params);
      }
    };
  }
]).factory('wincountService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    //开奖统计列表查看
    return {
      winCount: function (typeCode, params) {
        return $http.get(pathProject.winCount_url(typeCode), { params: params });
      }
    };
  }
]).factory('channelListService', [
  '$http',
  'pathProject',
  function ($http, pathProject) {
    return {
      channelList: function (params) {
        return $http.get(pathProject.channelList_url(), { params: params });
      },
      dayList: function (channelNo, params) {
        return $http.get(pathProject.dayList_url(channelNo), { params: params });
      },
      shoppingList: function (channelNo, params) {
        return $http.get(pathProject.shoppingList_url(channelNo), { params: params });
      }
    };
  }
]);