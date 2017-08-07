'use strict';
angular.module('admin')

//用户管理
    .factory('userService', function ($http, pathProject) {
        return {
            //线下充值入账
            lineRecharge: function (mobile, params) {
                return $http({
                    url: pathProject.lineRecharge_url(mobile),
                    method: "post",
                    headers: {'Content-type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data, headersGetter) {
                        return $.param(data)
                    },
                    data: params
                })
            },
            //用户管理-用户列表：获取用户列表
            userManagementList: function (params) {
                return $http.get(pathProject.userManagementList_url(), {params: params})
            },

            //用户管理-用户列表：用户冻结
            userfrozen: function (id, params) {
                return $http.put(pathProject.userfrozen(id, params))
            },

            //用户管理-用户详情：根据用户id查询用户详情
            userManagementDetails: function (userId, params) {
                return $http.get(pathProject.userManagementDetails_url(userId), params)
            },

            //用户管理-用户详情:彩金明细
            prizeMoneyDetailList: function (userId,params) {
                return $http.get(pathProject.prizeMoneyDetailList_url(userId),{params:params})
            },
            //用户管理-用户详情:红包明细
            redMoneyDetailList: function (userId,params) {
                return $http.get(pathProject.redMoneyDetailList_url(userId),{params:params})
            },

            //用户管理-用户详情:体验金明细
            experienceMoneyList: function (userId,params) {
                return $http.get(pathProject.experienceMoneyList_url(userId),{params:params})
            },

            //用户管理-用户详情:充值记录
            rechargeRecordList: function (userId,params) {
                return $http.get(pathProject.rechargeRecordList_url(userId),{params:params})
            },

            //用户管理-用户详情:提现记录
            withdrawalsRecordList: function (userId,params) {
                return $http.get(pathProject.withdrawalsRecordList_url(userId),{params:params})
            },

            //用户管理-用户详情:购彩明细列表（彩金和体验金）共用的
            orderDetailsList: function (type, userId,params) {
                    return $http.get(pathProject.orderDetailsList_url(type, userId),{params:params})
            },
            //用户管理-用户详情:购彩明细（彩金和体验金）-订单详情
            orderDetailsMDetails: function (id) {
                return $http.get(pathProject.orderDetailsMDetails_url(id))
            },
            //实名管理-身份证列表：根据字段查询
            verifiedList: function (params) {
                return $http.get(pathProject.verifiedList_url(), {params: params})
            },

            //实名管理-取消认证：取消实名认证信息
            verifiedCancel: function (id, params) {
                return $http.delete(pathProject.verifiedCancel_url(id, params))
            },

            //绑卡管理-身份证列表
            tieCardManageList: function (params) {
                return $http.get(pathProject.tieCardManageList_url(), {params: params})
            },
            //绑卡管理-解除绑定身份证
            deltieCardManage: function (id) {
                return $http.delete(pathProject.deltieCardManage_url(id))
            },
            //筛选中 获取银行列表
            getBankList:function(){
                return $http.get(pathProject.getBankList())
            }

        }
    })






    // 出票方统计
    .factory('drawerCountService', function ($http, pathProject) {
        return {
            // 获取国信彩统计列表
            drawerCountList: function (params) {
                return $http.get(pathProject.drawerCount_url, {params: params})
            },

            // 国信彩日彩种统计
            dayLotteryTypesList: function (params) {
                return $http.get(pathProject.dayLotteryTypes_url, {params: params})
            },

            // 国信彩明细
            drawerCountDetailsList: function (params) {
                return $http.get(pathProject.drawerCountDetails_url, {params: params})
            },

            // 国信彩彩种总计
            lotteryTypesList: function (params) {
                return $http.get(pathProject.lotteryTypes_url, {params: params})
            },

            //国信彩彩种玩法统计
            lotteryTypeDetailList:function(params){
                return $http.get(pathProject.lotteryTypeDetailList,{params:params})
            },


        }
    })

    //参数统计
    .factory('parameterService', function ($http, pathProject) {
        return {
            /*红包管理*/
            //获取红包管理列表
            getRedSet: function (params) {
                return $http.get(pathProject.getRedSet, {params: params})
            },
            //删除红包明细
            deleteRed: function (id, parmas) {
                return $http.delete(pathProject.deleteRed(id), parmas)
            },
            //新增红包
            newRed: function (params) {
                return $http.post(pathProject.newRed, params)
            },

            //编辑
            putRed: function (id, params) {
                return $http.put(pathProject.putRed(id), params)
            },

            //查询单个红包
            redDetail: function (id) {
                return $http.get(pathProject.redDetail(id))
            },

            //获取彩票彩种的json
            getLotteryTypeJson: function () {
                return $http.get(pathProject.getLotteryTypeJson())
            },


            /*天天摇奖管理*/
            //获取奖品列表
            getLuckLIst: function (params) {
                return $http.get(pathProject.getLuckLIst(), {params: params})
            },

            //增加奖品
            newLuck: function (params) {
                return $http.post(pathProject.newLuck, params)
            },

            //删除奖品
            deleteLuck: function (id) {
                return $http.delete(pathProject.deleteLuck(id))
            },

            // 设置为最低奖
            setLowerLcuk:function(id){
                return $http.put(pathProject.setLowerLcuk(id))
            },

            //编辑奖品
            putLuck: function (id, params) {
                return $http.put(pathProject.putLuck(id), params)
            },

            //查询奖品详情
            getLuckDetail: function (id) {
                return $http.get(pathProject.getLuckDetail(id))
            },


            /*彩种管理*/
            //1 彩种管理列表
            getlotteryTypeList: function (params) {
                return $http.get(pathProject.getlotteryTypeList, {params: params})
            },

            //2 控制开售 停售
            lotteryStartEnd: function (id, status) {
                return $http.put(pathProject.lotteryStartEnd(id, status))
            },

            //3 彩种管理：编辑彩种
            saveLotterySet: function (id, parmas) {
                return $http.put(pathProject.saveLotterySet(id), parmas)
            },

            //4 彩种管理 获取彩种详情
            getLotteryDetaiol: function (id) {
                return $http.get(pathProject.getLotteryDetaiol(id))
            },


            //保存排序
            saveLotterySort: function (params) {
                return $http({
                    url: pathProject.saveLotterySort(),
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(params),
                    transformRequest: function (data, headersGetter) {
                        return data;
                    }
                });
            },


            //注意!!!!!!!!!!! 购彩技巧/banner/精彩活动/push管理/频道广告/帮助中心/启动页 在下列接口
            //type=1：购彩技巧；type=2：banner管理；type=3：精彩活动管理；type=4：push管理；type=5：频道广告管理；type=6：帮助中心管理；type=7：启动页管理 type=8 版本管理；
            //获取列表
            getArticleList: function (params) {
                return $http.get(pathProject.getArticleList(), {params: params});
                // return $http.get(pathProject.getArticleList,{params:params})
            },
            //增加
            addArticle: function (params) {
                return $http.post(pathProject.addArticle(), params)
            },

            //删除
            deleteArticle: function (id) {
                return $http.delete(pathProject.deleteArticle(id))
            },


            //编辑查询详情
            putArticleDetail: function (id) {
                return $http.get(pathProject.putArticleDetail_url(id))
            },
            //编辑
            putArticle: function (id, params) {
                return $http.put(pathProject.putArticle(id), params)
            },

            //保存排序
            saveDrop: function (params) {
                return $http({
                    url: pathProject.saveDrop,
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(params),
                    transformRequest: function (data, headersGetter) {
                        return data;
                    }
                });
            },


            //注意!!!!!!!!!!! 购彩技巧/banner/精彩活动/push管理/频道广告/帮助中心/启动页 在下列接口  结束!!!


            /*参数设置*/
            //天天摇奖设置
            luckySet: function (params) {
                return $http.post(pathProject.luckySet, params)
            },
            //获取天天摇奖设置
            getLuckSet: function () {
                return $http.get(pathProject.getLuckSet)
            },

            //体验金设置
            scoreMoneySet: function (params) {
                return $http.post(pathProject.scoreMoneySet, params)
            },
            //获取体验金设置
            getScoureMoneySet: function () {
                return $http.get(pathProject.getScoureMoneySet)
            },

            //提现设置
            withDrawalsSet: function (params) {
                return $http.post(pathProject.withDrawalsSet, params)
            },
            //获取提现设置
            getWithDrawalsSet: function () {
                return $http.get(pathProject.getWithDrawalsSet)
            },


            //获取活动列表
            getEventList: function (params) {
                return $http.get(pathProject.getEventList, {params: params})
            },







            /*渠道管理*/
            //获取渠道列表
            getChannelSetList: function (params) {
                return $http.get(pathProject.getChannelSetList, {params: params})
            },

            //新增渠道
            addChannelSet: function (params) {
                return $http.post(pathProject.addChannelSet, params)
            },
            //修改渠道
            putChannelSet: function (id,params) {
                return $http.put(pathProject.putChannelSet(id), params)
            },

            //渠道详情
            getChannelDetail: function (id) {
                return $http.get(pathProject.getChannelDetail(id))
            }
        }
    })


    //充值数据统计
    .factory('rechargeService', function ($http, pathProject) {
        return {
            rechargeList: function (params) {
                return $http.get(pathProject.rechargeList_url, {params: params})
            }
        }
    })
    //提现管理
    .factory('cashService', function ($http, pathProject,commonUtil) {
        return {
            //提现列表
            //type=1为提现审核列表,type=2为提现处理列表
            cashList: function (params,type) {
                return $http.get(pathProject.cashList_url(type), {params: params})
            },
            //提现审核详情页
            cashDetails: function (batchNo,type,params) {
                return $http.get(pathProject.cashAuditDetails_url(batchNo,type), {params: params})
            },

            //根据ID查询某个提现订单详情
            getCashAuditOneDetails:function(id){
                return $http.get(pathProject.getCashAuditOneDetails(id))
            },

            //根据订单id Array获取订单列表
            getCashAuditListDetail:function(ids,excel){
                return $http.get(pathProject.getCashAuditListDetail(ids,excel))
            },
            //批量审核
            checkCashAuditList:function(params){
                return $http.put(pathProject.checkCashAuditList(params.type,params.ids),params)
            },

            //按ID更改审核状态
            cashAudit: function (params) {
                return $http.put(pathProject.cashAudit_url(params.type,params.withdrawalsId), params)
            },

            //获取审核未通过理由
            getAuditReason: function (id) {
                return $http.get(pathProject.cashAuditReason_url(id))
            },

            //按批次提交处理
            cashHandles: function (batchId) {
                return $http.post(pathProject.cashHandles_url(batchId))
            },
            //按ID提交处理
            cashHandle: function (params) {
                return $http.post(pathProject.cashHandle_url(params))
            },
            //获取提现失败理由
            getHandleReason: function (id) {
                return $http.get(pathProject.getHandleReason_url(id))
            }
        }
    })

    //上传文件
    .factory('uploadService', function (pathProject) {
        return {
            uploadFile: function (FileUploader, alias) {
                var param = {url: pathProject.upload_url};
                if (alias) {
                    angular.extend(param, {alias: alias});
                }
                return new FileUploader(param);
            }
        }
    })

    //开奖号管理
    .factory('lotteryService', function ($http, pathProject) {
        return {
            //开奖号管理列表查看
            LotteryList: function (params) {
                return $http.get(pathProject.lotteryManageList_url, {params: params})
            },

            //开奖号管理详情
            LotteryDetails: function (params, typeCode) {
                return $http.get(pathProject.lotteryDetails_url(typeCode), {params: params})
            },
            //开奖号管理详情查询某记录
            LotteryDetailsDemand: function (params) {
                return $http.get(pathProject.lotteryDetailsDemand_url(params.id))
            },

            //开奖号管理详情编辑
            LotteryDetailsChange: function (params, id) {
                return $http.put(pathProject.lotteryDetailsChange_url(id), params)
            }
        }
    })

    // 开奖统计
    .factory('wincountService', function ($http, pathProject) {
        //开奖统计列表查看
        return {
            winCount: function (typeCode, params) {
                return $http.get(pathProject.winCount_url(typeCode), {params: params})
            }
        }
    })

    // 渠道统计
    .factory("channelListService", function ($http, pathProject) {
        return {
            // 渠道统计
            channelList: function (params) {
                return $http.get(pathProject.channelList_url(), {params: params})
            },

            // 渠道统计-日明细
            dayList: function (channelNo, params) {
                return $http.get(pathProject.dayList_url(channelNo), {params: params})
            },

            //渠道统计-购彩明细
            shoppingList: function (channelNo, params) {
                return $http.get(pathProject.shoppingList_url(channelNo), {params: params})
            }
        }
    });




