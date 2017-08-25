"use strict";angular.module("admin").factory("userService",["$http","pathProject",function(t,e){return{lineRecharge:function(r,n){return t({url:e.lineRecharge_url(r),method:"post",headers:{"Content-type":"application/x-www-form-urlencoded"},transformRequest:function(t,e){return $.param(t)},data:n})},userManagementList:function(r){return t.get(e.userManagementList_url(),{params:r})},userfrozen:function(r,n){return t.put(e.userfrozen(r,n))},userManagementDetails:function(r,n){return t.get(e.userManagementDetails_url(r),n)},prizeMoneyDetailList:function(r,n){return t.get(e.prizeMoneyDetailList_url(r),{params:n})},redMoneyDetailList:function(r,n){return t.get(e.redMoneyDetailList_url(r),{params:n})},experienceMoneyList:function(r,n){return t.get(e.experienceMoneyList_url(r),{params:n})},rechargeRecordList:function(r,n){return t.get(e.rechargeRecordList_url(r),{params:n})},withdrawalsRecordList:function(r,n){return t.get(e.withdrawalsRecordList_url(r),{params:n})},orderDetailsList:function(r,n,u){return t.get(e.orderDetailsList_url(r,n),{params:u})},orderDetailsMDetails:function(r){return t.get(e.orderDetailsMDetails_url(r))},verifiedList:function(r){return t.get(e.verifiedList_url(),{params:r})},verifiedCancel:function(r,n){return t["delete"](e.verifiedCancel_url(r,n))},tieCardManageList:function(r){return t.get(e.tieCardManageList_url(),{params:r})},deltieCardManage:function(r){return t["delete"](e.deltieCardManage_url(r))},getBankList:function(){return t.get(e.getBankList())}}}]).factory("drawerCountService",["$http","pathProject",function(t,e){return{drawerCountList:function(r){return t.get(e.drawerCount_url,{params:r})},dayLotteryTypesList:function(r){return t.get(e.dayLotteryTypes_url,{params:r})},drawerCountDetailsList:function(r){return t.get(e.drawerCountDetails_url,{params:r})},lotteryTypesList:function(r){return t.get(e.lotteryTypes_url,{params:r})},lotteryTypeDetailList:function(r){return t.get(e.lotteryTypeDetailList,{params:r})}}}]).factory("parameterService",["$http","pathProject",function(t,e){return{getRedSet:function(r){return t.get(e.getRedSet,{params:r})},deleteRed:function(r,n){return t["delete"](e.deleteRed(r),n)},newRed:function(r){return t.post(e.newRed,r)},putRed:function(r,n){return t.put(e.putRed(r),n)},redDetail:function(r){return t.get(e.redDetail(r))},getLotteryTypeJson:function(){return t.get(e.getLotteryTypeJson())},getLuckLIst:function(r){return t.get(e.getLuckLIst(),{params:r})},newLuck:function(r){return t.post(e.newLuck,r)},deleteLuck:function(r){return t["delete"](e.deleteLuck(r))},setLowerLcuk:function(r){return t.put(e.setLowerLcuk(r))},putLuck:function(r,n){return t.put(e.putLuck(r),n)},getLuckDetail:function(r){return t.get(e.getLuckDetail(r))},getlotteryTypeList:function(r){return t.get(e.getlotteryTypeList,{params:r})},lotteryStartEnd:function(r,n){return t.put(e.lotteryStartEnd(r,n))},saveLotterySet:function(r,n){return t.put(e.saveLotterySet(r),n)},getLotteryDetaiol:function(r){return t.get(e.getLotteryDetaiol(r))},saveLotterySort:function(r){return t({url:e.saveLotterySort(),method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(r),transformRequest:function(t,e){return t}})},getArticleList:function(r){return t.get(e.getArticleList(),{params:r})},addArticle:function(r){return t.post(e.addArticle(),r)},deleteArticle:function(r){return t["delete"](e.deleteArticle(r))},putArticleDetail:function(r){return t.get(e.putArticleDetail_url(r))},putArticle:function(r,n){return t.put(e.putArticle(r),n)},saveDrop:function(r){return t({url:e.saveDrop,method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(r),transformRequest:function(t,e){return t}})},luckySet:function(r){return t.post(e.luckySet,r)},getLuckSet:function(){return t.get(e.getLuckSet)},scoreMoneySet:function(r){return t.post(e.scoreMoneySet,r)},getScoureMoneySet:function(){return t.get(e.getScoureMoneySet)},withDrawalsSet:function(r){return t.post(e.withDrawalsSet,r)},getWithDrawalsSet:function(){return t.get(e.getWithDrawalsSet)},getEventList:function(r){return t.get(e.getEventList,{params:r})},getChannelSetList:function(r){return t.get(e.getChannelSetList,{params:r})},addChannelSet:function(r){return t.post(e.addChannelSet,r)},putChannelSet:function(r,n){return t.put(e.putChannelSet(r),n)},getChannelDetail:function(r){return t.get(e.getChannelDetail(r))}}}]).factory("rechargeService",["$http","pathProject",function(t,e){return{rechargeList:function(r){return t.get(e.rechargeList_url,{params:r})}}}]).factory("cashService",["$http","pathProject","commonUtil",function(t,e,r){return{cashList:function(r,n){return t.get(e.cashList_url(n),{params:r})},cashDetails:function(r,n,u){return t.get(e.cashAuditDetails_url(r,n),{params:u})},getCashAuditOneDetails:function(r){return t.get(e.getCashAuditOneDetails(r))},getCashAuditListDetail:function(r,n){return t.get(e.getCashAuditListDetail(r,n))},checkCashAuditList:function(r){return t.put(e.checkCashAuditList(r.type,r.ids),r)},cashAudit:function(r){return t.put(e.cashAudit_url(r.type,r.withdrawalsId),r)},getAuditReason:function(r){return t.get(e.cashAuditReason_url(r))},cashHandles:function(r){return t.post(e.cashHandles_url(r))},cashHandle:function(r){return t.post(e.cashHandle_url(r))},getHandleReason:function(r){return t.get(e.getHandleReason_url(r))}}}]).factory("uploadService",["pathProject",function(t){return{uploadFile:function(e,r){var n={url:t.upload_url};return r&&angular.extend(n,{alias:r}),new e(n)}}}]).factory("lotteryService",["$http","pathProject",function(t,e){return{LotteryList:function(r){return t.get(e.lotteryManageList_url,{params:r})},LotteryDetails:function(r,n){return t.get(e.lotteryDetails_url(n),{params:r})},LotteryDetailsDemand:function(r){return t.get(e.lotteryDetailsDemand_url(r.id))},LotteryDetailsChange:function(r,n){return t.put(e.lotteryDetailsChange_url(n),r)}}}]).factory("wincountService",["$http","pathProject",function(t,e){return{winCount:function(r,n){return t.get(e.winCount_url(r),{params:n})}}}]).factory("channelListService",["$http","pathProject",function(t,e){return{channelList:function(r){return t.get(e.channelList_url(),{params:r})},dayList:function(r,n){return t.get(e.dayList_url(r),{params:n})},shoppingList:function(r,n){return t.get(e.shoppingList_url(r),{params:n})}}}]);