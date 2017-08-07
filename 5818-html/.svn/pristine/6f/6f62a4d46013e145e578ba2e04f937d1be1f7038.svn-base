/**
 * Created by gaogao on 16/7/22.
 */
angular.module("admin")
    .factory('pathProject', function (commonUtil) {
        return {



            //上传文件接口
            upload_url: "/a/u/img/1",

            /* 出票方统计 */
            // 获取国信彩统计列表
            drawerCount_url: "/a/user/issue/statistics",
            // 国信彩日彩种统计
            dayLotteryTypes_url: "/a/user/issue/lottery",
            // 国信彩详情
            drawerCountDetails_url: "/a/user/issue/play",
            // 国信彩彩种总计
            lotteryTypes_url: "/a/user/issue/platform",
            //国信彩彩种玩法统计
            lotteryTypeDetailList:"/a/user/issue/platform/play",

            /*参数设置*/
            /*红包管理*/
            //获取红包明细列表
            getRedSet: "/a/red/list",

            //删除红包明细
            deleteRed: function (id) {
                return "/a/u/red/" + id
            },

            //新增红包
            newRed: "/a/u/red",

            //编辑
            putRed: function (id) {
                return "/a/u/red/" + id
            },

            //查询单个红包
            redDetail: function (id) {
                return "/a/red/" + id
            },

            //获取彩种的json
            getLotteryTypeJson: function () {
                return "js/json/lotteryType.json"
            },

            /*天天摇奖*/
            //获取奖品列表
            getLuckLIst: function () {
                return "/a/prize";
            }
            ,

            //增加奖品
            newLuck: "/a/u/prize",

            //删除奖品
            deleteLuck: function (id) {
                return "/a/u/prize/" + id
            },
            //设置为最低奖
            setLowerLcuk:function(id){
                return "/a/u/prize/lowest/"+id
            },

            //编辑奖品
            putLuck: function (id) {
                return "/a/u/prize/" + id
            },

            //查询奖品详情
            getLuckDetail: function (id) {
                return "/a/prize/detail/" + id
            },

            /*彩种管理*/
            //1 彩种管理列表
            getlotteryTypeList: "/a/lottery",

            //2 控制开售 停售
            lotteryStartEnd: function (id, status) {
                return "/a/u/lottery/" + id + '/' + status
            },

            //3 彩种管理：编辑彩种
            saveLotterySet: function (id) {
                return "/a/u/lottery/" + id
            },

            //4 彩种管理-获取详情
            getLotteryDetaiol: function (id) {
                return "/a/lottery/detail/" + id
            },

            // 保存排序的接口
            saveLotterySort: function () {
                return "/a/u/lottery/order/"
            },

            /*参数设置中的公共接口*/

            //注意!!!!!!!!!!! 购彩技巧/banner/精彩活动/push管理/频道广告/帮助中心/启动页 在下列接口
            //type=1：购彩技巧；type=2：banner管理；type=3：精彩活动管理；type=4：push管理；type=5：频道广告管理；type=6：帮助中心管理；type=7：启动页管理；

            //获取列表
            getArticleList: function () {
                return "/a/u/article"
            },

            //增加
            addArticle: function () {
                return "/a/u/article"
            },

            //删除
            deleteArticle: function (id) {
                return "/a/u/article/" + id
            },

            //编辑
            putArticle: function (id) {
                return "/a/u/article/" + id
            },

            //保存排序
            saveDrop: "/a/u/article/order/",

            //getArticleList:function(type){
            //    return  "/a/article"+type
            //},

            //修改查询详情
            putArticleDetail_url: function (id) {
                return '/a/u/article/' + id
            },
            //注意!!!!!!!!!!! 购彩技巧/banner/精彩活动/push管理/频道广告/帮助中心/启动页 在下列接口  结束!!!


            /*参数设置*/
            //天天摇奖设置
            luckySet: "/a/u/constant/lucky",
            //获取天天摇奖设置
            getLuckSet: "/a/constant/lucky",

            //体验金设置
            scoreMoneySet: "/a/u/constant/score",
            //获取体验金设置
            getScoureMoneySet: "/a/constant/score",

            //提现设置
            withDrawalsSet: "/a/u/constant/money",
            //获取提现设置
            getWithDrawalsSet: "/a/constant/money",
            //获取


            /*精彩活动*/
            //获取活动列表
            getEventList: function () {
                return '/a/u/article'
            }
            ,


            /*渠道管理*/
            //获取渠道列表
            getChannelSetList: "/a/channel",

            //增加渠道
            addChannelSet: "/a/u/channel",

            //编辑渠道
            putChannelSet: function(id){
                return "/a/u/channel/"+id
            },

            //获取渠道详情
            getChannelDetail: function (id) {
                return "/a/channel/detail/" + id
            },

            /*参数设置结束*/

            //充值查询
            //获取充值列表
            rechargeList_url: '/a/user/recharge/statistic/',

            //提现管理-开始
            //提现列表
            cashList_url:function (type) {
                return "/a/withdrawal/batch/" + type + "/list"
            },


            //提现审核详情页
            cashAuditDetails_url: function (batchNo,type) {
              return "/a/cash/management/check/info/"+ type +"/" + batchNo
            },

            //根据ID查询某个提现订单详情
            getCashAuditOneDetails:function(id){
                return "/a/withdrawals/"+id
            },

            //根据订单id Array获取订单列表
            getCashAuditListDetail:function(ids,excel){
                if(!excel){
                    return "/a/u/withdrawals/list"+commonUtil.concactArrayParam('ids',ids)
                }
                else{
                    return "/a/u/withdrawals/list"+commonUtil.concactArrayParam('ids',ids)+'&excel='+excel
                }
            },
            
            //批次审核
            checkCashAuditList:function(type,ids){
                return "/a/u/withdrawalBatch/"+type+'/submit'+commonUtil.concactArrayParam('ids',ids)
            },

            //单条审核状态更改
            cashAudit_url: function (type,id) {
                //return "/a/u/cash/management/check/info/" + id
                return "/a/u/cash/management/check/status/"+type+'/'+id
            },

            //获取审核未通过理由
            cashAuditReason_url: function (id) {
                return "/a/cash/management/check/info/reason/" + id
            },

            //按批次提交处理
            cashHandles_url:function (batchId) {
                return "/a/u/withdrawalBatch/"+batchId+'/submit'
            },

            //按请求提交处理
            cashHandle_url:function (id) {
                return "/a/u/admin/cash/management/deal/single/" + id
            },

            //提现失败理由
            getHandleReason_url: function (id) {
                return "/123/" + id
            },
            //提现管理-结束

            //开奖号管理
            //开奖号管理-各彩种最新一期开奖列表
            lotteryManageList_url: "/a/issue/list",

            //开奖号管理-根据彩种编码查询彩种的开奖详情+中奖统计
            lotteryDetails_url: function (typeCode) {
                return "/a/issue/" + typeCode + "/list";
            },

            //开奖号管理详情查询某记录
            lotteryDetailsDemand_url:function (id) {
                return " /a/issue/" +id;
            },
            //开奖号管理-编辑彩种某期的记录
            lotteryDetailsChange_url: function (id) {
                return "/a/u/issue/" + id
            },


            // 开奖统计
            winCount_url: function (typeCode) {
                return " /a/issue/" + typeCode + "/list"
            },

            // 渠道统计
            channelList_url: function () {
                 return "/a/channel/statistics";

            },

            // 渠道统计-日明细
            dayList_url: function (channelNo) {
                return "/a/channel/statstics/day/" + channelNo;
            },

            //渠道统计-购彩明细
            shoppingList_url: function (channelNo) {
                return "/a/channel/statstics/bet/" + channelNo;
            },


            /*用户管理*/
            //用户管理-用户列表：获取用户列表
            userManagementList_url: function () {
                    return "/a/user/list";
            },
            //用户管理-用户列表:用户冻结;
            userfrozen: function (id, params) {
                return "/a/u/user/status/" + id + "?status=" + params
            },
            //用户管理-用户详情：根据用户id查询用户详情
            userManagementDetails_url: function (userId) {
                if (!userId) {
                    return "/a/user/list/detail/";
                } else {
                    return "/a/user/list/detail/" + userId;
                }
            },
            //用户管理-用户详情：彩金明细
            prizeMoneyDetailList_url: function (userId) {
                return "/a/user/money/history/" + userId;
            },

            //用户管理-用户详情：红包明细
            redMoneyDetailList_url: function (userId) {
                return "/a/user/red/history/" + userId;
            },

            //用户管理-用户详情：体验金明细
            experienceMoneyList_url: function (userId) {
                return " /a/user/score/history/" + userId
            },
            //用户管理-用户详情：充值记录
            rechargeRecordList_url: function (userId) {
                return "/a/user/recharging/" + userId
            },

            //用户管理-用户详情：提现记录
            withdrawalsRecordList_url: function (userId) {
                return "/a/user/withdrawals/" + userId
            },

            //用户管理-用户详情：购彩明细（彩金和体验金）根据用户ID查询用户购彩明细（彩金和体验金）

            //用户管理-用户详情：购彩明细（彩金和体验金）
            orderDetailsList_url: function (type, userId) {
                return "/a/orders/list/" + type + "/" + userId
            },
            //用户管理-用户详情:购彩明细（彩金和体验金）-订单详情
            orderDetailsMDetails_url: function (id) {
                return "/a/orders/" + id
            },
            //实名管理-身份证列表：根据字段查询
            verifiedList_url: function () {
                return " /a/user/name/confirm"
            },
            //实名认证-取消认证：删除实名认证信息
            verifiedCancel_url: function (id) {
                return " /a/u/user/name/confirm/" + id
            },
            //绑卡管理-身份证列表
            tieCardManageList_url: function () {
                return "/a/bankcard/"
            },
            //绑卡管理-解除绑卡信息
            deltieCardManage_url: function (id) {
                return "/a/u/bankcard/unbind/" + id
            },
            //获取筛选中银行列表
            getBankList:function(){
                return "/a/bank/list"
            },


            //线下充值入账
            lineRecharge_url: function (mobile) {
                return "/a/u/money/history/" + mobile
            }

        }
    });