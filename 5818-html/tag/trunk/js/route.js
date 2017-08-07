'use strict';
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });
    var versionNum='003';


    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider


        .state('field', {
            url: '',
            templateUrl: 'views/main.html',
            controller: 'MainController',
            controllerAs: 'vm',
            //abstract: true, // true 表明此状态不能被显性激活，只能被子状态隐性激活
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/admin/mainController.js?ver='+versionNum,
                    'js/directives/ptteng-sidebar/ptteng-sidebar-0.0.1.js?ver='+versionNum,
                    //'js/directives/searchParams/search-params.js?ver='+versionNum,
                    'js/directives/ptteng-user/ptteng-user-0.0.1.js?ver='+versionNum,
                    'js/directives/ptteng-paging/pagination.js?ver='+versionNum,
                    //'js/directives/ptteng-uploadThumb/ptteng-uploadThumb-0.0.1.js?ver='+versionNum,
                    "js/directives/numberic/numberic.js?ver="+versionNum
                ])
            }
        })


        .state('field.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html'
        })


        /*业务办理*/
        //线下充值入账
        .state('field.lineRecharge', {
            url: '/lineRecharge',
            templateUrl: 'views/businessProcessing/lineRecharge.html',
            controller: 'lineRecharge',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/lineRecharge.js?ver='+versionNum)
            }
        })
        /*用户管理*/
        //用户管理列表
        .state('field.userManagement', {
            url: '/userManagement?id&page&size&mobile&name&alias&startAt&endAt',
            templateUrl: 'views/businessProcessing/userManagement.html',
            controller: 'userManagement',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/businessProcessing/userManagement.js?ver='+versionNum,
                    'search'
                    ]
                    )
            }
        })
        //用户管理-用户详情
        .state('field.userDetails', {
            url: '/userDetails?userId&type',
            templateUrl: 'views/businessProcessing/userDetails.html',
            controller: 'userDetails',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/userDetails.js?ver='+versionNum)
            }
        })
        //用户管理-用户详情-彩金明细
        .state('field.prizeMoneyDetail', {
            url: '/prizeMoneyDetail?userId&page&size&showName',
            templateUrl: 'views/businessProcessing/prizeMoneyDetail.html',
            controller: 'prizeMoneyDetail',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/prizeMoneyDetail.js?ver='+versionNum)
            }
        })
        //用户管理-用户详情-红包明细
        .state('field.redMoneyDetail', {
            url: '/redMoneyDetail?userId&page&size&showName',
            templateUrl: 'views/businessProcessing/redMoneyDetail.html',
            controller: 'redMoneyDetail',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/redMoneyDetail.js?ver='+versionNum)
            }
        })

        //用户管理-用户详情-体验金明细
        .state('field.experienceMoney', {
            url: '/experienceMoney?userId&page&size&showName',
            templateUrl: 'views/businessProcessing/experienceMoney.html',
            controller: 'experienceMoney',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/experienceMoney.js?ver='+versionNum)
            }
        })
        ////用户管理-用户详情-购彩明细（彩金）
        .state('field.orderDetailsPM', {
            url: '/orderDetailsPM?userId&type&page&size&showName',
            templateUrl: 'views/businessProcessing/orderDetailsPM.html',
            controller: 'orderDetailsPM',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/orderDetailsPM.js?ver='+versionNum)
            }
        })
        //用户管理-用户详情-购彩明细（彩金）-详情
        .state('field.orderDetailsPMDetails', {
            url: '/orderDetailsPMDetails?id',
            templateUrl: 'views/businessProcessing/orderDetailsPMDetails.html',
            controller: 'orderDetailsPMDetails',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/orderDetailsPMDetails.js?ver='+versionNum)
            }
        })
        //用户管理-用户详情-购彩明细（体验金）
        .state('field.orderDetailsEM', {
            url: '/orderDetailsEM?userId&type&page&size&showName',
            templateUrl: 'views/businessProcessing/orderDetailsEM.html',
            controller: 'orderDetailsEM',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/orderDetailsEM.js?ver='+versionNum)
            }
        })
        //用户管理-用户详情-购彩明细（体验金）-详情
        .state('field.orderDetailsEMDetails', {
            url: '/orderDetailsEMDetails?id',
            templateUrl: 'views/businessProcessing/orderDetailsEMDetails.html',
            controller: 'orderDetailsEMDetails',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/orderDetailsEMDetails.js?ver='+versionNum)
            }
        })

        //用户管理-用户详情-提现记录
        .state('field.withdrawalsRecord', {
            url: '/withdrawalsRecord?userId&showName&page&size',
            templateUrl: 'views/businessProcessing/withdrawalsRecord.html',
            controller: 'withdrawalsRecord',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/withdrawalsRecord.js?ver='+versionNum)
            }
        })
        //用户管理-用户详情-充值记录
        .state('field.rechargeRecord', {
            url: '/rechargeRecord?userId&page&size&showName',
            templateUrl: 'views/businessProcessing/rechargeRecord.html',
            controller: 'rechargeRecord',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/businessProcessing/rechargeRecord.js?ver='+versionNum)
            }
        })

        //实名认证管理
        .state('field.verified', {
            url: '/verified?page&size&mobile&name&idNo&startAt&endAt',
            templateUrl: 'views/businessProcessing/verified.html',
            controller: 'verified',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/businessProcessing/verified.js?ver='+versionNum,
                    'search'
                    ]
                    )
            }
        })
        //绑卡管理
        .state('field.tieCardManage', {
            url: '/tieCardManage?page&size&mobile&name&bank&cardNo&startAt&endAt',
            templateUrl: 'views/businessProcessing/tieCardManage.html',
            controller: 'tieCardManage',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/businessProcessing/tieCardManage.js?ver='+versionNum,
                        'search'
                    ]
                    )
            }
        })

        /*参数设置*/
        //红包管理
        .state('field.redSet', {
            url: '/redSet/:page/:size?name&status&createByName&startAt&endAt',
            templateUrl: 'views/parameterSet/redSet.html',
            controller: 'redSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/redSet.js?ver='+versionNum,
                    'search'
                    ])
            }
        })

        //红包管理-编辑
        .state('field.redSetDetail', {
            url: '/redSetDetail?id',
            templateUrl: 'views/parameterSet/redSetDetail.html',
            controller: 'redSetDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/parameterSet/redSetDetail.js?ver='+versionNum
                )
            }
        })

        //天天摇奖管理
        .state('field.luckDrawSet', {
            url: '/luckDrawSet?page&size&prizeName&status&createByName&creatAtStart&creatAtEnd',
            templateUrl: 'views/parameterSet/luckDrawSet.html',
            controller: 'luckDrawSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/luckDrawSet.js?ver='+versionNum,
                    'search'
                    ]

                )
            }
        })

        //天天摇奖-编辑/新建
        .state('field.luckDrawDetail', {
            url: '/luckDrawDetail?id',
            templateUrl: 'views/parameterSet/luckDrawDetail.html',
            controller: 'luckDrawDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/parameterSet/luckDrawDetail.js?ver='+versionNum)
            }
        })

        //彩种管理
        .state('field.lotteryTypeSet', {
            url: '/lotteryTypeSet/:page/:size',
            templateUrl: 'views/parameterSet/lotteryTypeSet.html',
            controller: 'lotteryTypeSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/parameterSet/lotteryTypeSet.js?ver='+versionNum,
                    'page'
                )
            }
        })
        //彩种管理-编辑/新增
        .state('field.lotteryTypeDetail', {
            url: '/lotteryTypeDetail?id',
            templateUrl: 'views/parameterSet/lotteryTypeDetail.html',
            controller: 'lotteryTypeDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/lotteryTypeDetail.js?ver='+versionNum,
                        'angularFileUpload'
                    ]
                )
            }
        })

        //彩票技巧
        .state('field.lotterySkill', {
            url: '/lotterySkill?page&size&title&status&createByName&startAt&endAt',
            templateUrl: 'views/parameterSet/lotterySkill.html',
            controller: 'lotterySkillController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/lotterySkill.js?ver='+versionNum,
                    'search',
                        'drop'
                    ]
                )
            }
        })

        //彩票技巧-新建/编辑
        .state('field.lotterySkillDetail', {
            url: '/lotterySkillDetail?id',
            templateUrl: 'views/parameterSet/lotterySkillDetail.html',
            controller: 'lotterySkillDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/lotterySkillDetail.js?ver='+versionNum,
                    'um'
                    ]
                )
            }
        })

        //参数管理
        .state('field.parameterSet', {
            url: '/parameterSet',
            templateUrl: 'views/parameterSet/parameterSet.html',
            controller: 'parameterSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/parameterSet/parameterSet.js?ver='+versionNum)
            }
        })

        //活动设置
        .state('field.eventSet', {
            url: '/eventSet/:page/:size?&title&createByName&situation&status&startAt&endAt',
            templateUrl: 'views/parameterSet/eventSet.html',
            controller: 'eventSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/eventSet.js?ver='+versionNum,'search','drop']
                    )
            }
        })
        //活动设置-编辑/新增
        .state('field.eventDetail', {
            url: '/eventDetail?id',
            templateUrl: 'views/parameterSet/eventDetail.html',
            controller: 'eventDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/eventDetail.js?ver='+versionNum,
                    'angularFileUpload'
                    ]
                    )
            }
        })

        //banner管理
        .state('field.bannerSet', {
            url: '/bannerSet/:page/:size?title&status&createByName&startAt&endAt',
            templateUrl: 'views/parameterSet/bannerSet.html',
            controller: 'bannerSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(['js/controllers/parameterSet/bannerSet.js?ver='+versionNum,
                'search',
                'drop'
                ]
                    )
            }
        })
        //banner管理-新增/编辑
        .state('field.bannerDetail', {
            url: '/bannerDetail?id',
            templateUrl: 'views/parameterSet/bannerDetail.html',
            controller: 'bannerDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                        'js/controllers/parameterSet/bannerDetail.js?ver='+versionNum,
                    'um',
                    'angularFileUpload'
                ]
                    )
            }
        })

         //版本管理
        .state('field.versionController',{
            url:'/versionController',
            templateUrl:'views/parameterSet/versionController.html',
            controller:'versionControllerCtrl',
            controllerAs:'vm',
            resolve:{
                loadMyFile:_lazyLoad(
                    ['js/controllers/parameterSet/versionControllerCtrl.js?ver='+versionNum,
                        'bindHtml'
                    ]
                )
            }
        })
          //版本管理编辑
        .state('field.versionControllerDetail',{
            url:'/versionControllerDetail/:id',
            templateUrl:'views/parameterSet/versionControllerDetail.html',
            controller:'versionControllerDetailCtrl',
            controllerAs:'vm',
            resolve:{
                loadMyFile:_lazyLoad([
                        'js/controllers/parameterSet/versionControllerDetailCtrl.js?ver='+versionNum,
                    'um'

                    ]
                )
            }
        })

        //启动页管理
        .state('field.startPageSet', {
            url: '/startPageSet/:page/:size?&title&createByName&startAt&endAt&status',
            templateUrl: 'views/parameterSet/startPageSet.html',
            controller: 'startPageSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/startPageSet.js?ver='+versionNum,
                    'search',
                        'drop'
                    ]
                    )
            }
        })

        //启动页管理-新增/编辑
        .state('field.startPageDetail', {
            url: '/startPageDetail?id',
            templateUrl: 'views/parameterSet/startPageDetail.html',
            controller: 'startPageDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/startPageDetail.js?ver='+versionNum,
                        'angularFileUpload',
                        'um'
                    ]
                )
            }
        })

        //广告管理
        .state('field.adviertisementSet', {
            url: '/adviertisementSet/:page/:size?content&createByName&startAt&endAt&status&createBy',
            templateUrl: 'views/parameterSet/adviertisementSet.html',
            controller: 'adviertisementSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/parameterSet/adviertisementSet.js?ver='+versionNum,
                    'search',
                    'drop'
                ]
                    )
            }
        })

        //广告管理-新增/编辑
        .state('field.adviertisementDetail', {
            url: '/adviertisementDetail?id',
            templateUrl: 'views/parameterSet/adviertisementDetail.html',
            controller: 'adviertisementDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/parameterSet/adviertisementDetail.js?ver='+versionNum)
            }
        })

        //push管理
        .state('field.pushSet', {
            url: '/pushSet/:page/:size?&type&title&createByName&status&endAt&startAt',
            templateUrl: 'views/parameterSet/pushSet.html',
            controller: 'pushSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/pushSet.js?ver='+versionNum,
                        'search'
                    ]
                    )
            }
        })

        //push管理-新增/编辑
        .state('field.pushDetail', {
            url: '/pushDetail?id',
            templateUrl: 'views/parameterSet/pushDetail.html',
            controller: 'pushDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/pushDetail.js?ver='+versionNum,
                    'um'
                    ]

                )
            }
        })

        //帮助与技巧管理
        .state('field.helpAndSkillSet', {
            url: '/helpAndSkillSet/:page/:size/?&title&createByName&status&endAt&startAt',
            templateUrl: 'views/parameterSet/helpAndSkillSet.html',
            controller: 'helpAndSkillSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/helpAndSkillSet.js?ver='+versionNum,
                        'search',
                        'drop'
                    ]
                    )
            }
        })

        //帮助与技巧管理-新增/编辑
        .state('field.helpAndSkillDetail', {
            url: '/helpAndSkillDetail?id',
            templateUrl: 'views/parameterSet/helpAndSkillDetail.html',
            controller: 'helpAndSkillDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/helpAndSkillDetail.js?ver='+versionNum,
                        'um'
                    ]
                    )
            }
        })

        //渠道管理
        .state('field.channelSet', {
            url: '/channelSet?page&size&channelId&platform&createByName&channelName&creatAtStart&creatAtEnd',
            templateUrl: 'views/parameterSet/channelSet.html',
            controller: 'channelSetController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/parameterSet/channelSet.js?ver='+versionNum,
                    'search'
                    ]
                    )
            }
        })
        //渠道编辑
        .state('field.channelEdit', {
            url: '/channelEdit?id',
            templateUrl: 'views/parameterSet/channelEdit.html',
            controller: 'channelEditController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/parameterSet/channelEdit.js?ver='+versionNum)
            }
        })

        /*提现管理*/
        //提现审核列表
        .state('field.cashAuditControl', {
            url: '/cashAudit/:page/:size?&dealStart&dealStatus&checkStatus&dealEnd&completeStart&completeEnd&status&dealBy&batchNo',
            templateUrl: 'views/cash/cashAudit.html',
            controller: 'cashAuditControl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/cash/cashAudit.js?ver='+versionNum,
                    'search'
                ]
                    )
            }
        })
        //提现审核详情
        .state('field.cashAuditDetailsControl', {
            url: '/cashAuditDetails/:page/:size/:batchNo?presentState&mobile&checkStatus&dealStatus&name&checkMan&bank&cashStart&cashEnd&checkStart&checkEnd',
            templateUrl: 'views/cash/cashAuditDetails.html',
            controller: 'cashAuditDetailsControl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/cash/cashAuditDetails.js?ver='+versionNum)
            }
        })
        //提现处理
        .state('field.cashHandleControl', {
            url: '/cashHandle/:page/:size?&dealStatus&dealStart&dealEnd&completeStart&completeEnd&dealBy&batchNo',
            templateUrl: 'views/cash/cashHandle.html',
            controller: 'cashHandleControl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(['js/controllers/cash/cashHandle.js?ver='+versionNum,
                    'search'
                ]
                    )
            }
        })
        //提现处理详情
        .state('field.cashHandleDetailsControl', {
            url: '/cashHandleDetails/:page/:size/:batchNo?&presentState&dealStatus&dealMan&mobile&name&checkMan&bank&cashStart&cashEnd&checkStart&checkEnd',
            templateUrl: 'views/cash/cashHandleDetails.html',
            controller: 'cashHandleDetailsControl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/cash/cashHandleDetails.js?ver='+versionNum)
            }
        })

        /*开奖号管理*/
        //开奖号管理
        .state('field.LotteryManage', {
            url: '/LotteryManage/:size/:page',
            templateUrl: 'views/lottery/LotteryManage.html',
            controller: 'LotteryManage',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/lottery/LotteryManage.js?ver='+versionNum)
            }
        })
        //开奖号详情
        .state('field.LotteryDetails', {
            url: '/LotteryDetails/:size/:page?typeCode&issue&startAt&endAt',
            templateUrl: 'views/lottery/LotteryDetails.html',
            controller: 'LotteryDetails',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/lottery/LotteryDetails.js?ver='+versionNum,
                    'search'
                    ]
                    )
            }
        })
        //开奖号编辑
        .state('field.LotteryRedact', {
            url: '/LotteryRedact/:id',
            templateUrl: 'views/lottery/LotteryRedact.html',
            controller: 'LotteryRedact',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/lottery/LotteryRedact.js?ver='+versionNum)
            }
        })



        /*充值统计*/
        //充值数据统计
        .state('field.rechargeStatistics', {
            url: '/rechargeStatistics/:page/:size/?&mobile&name&rechargePath&startAt&endAt',
            templateUrl: 'views/recharge/rechargeStatistics.html',
            controller: 'rechargeStatisticsControl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/recharge/rechargeStatistics.js?ver='+versionNum,
                    'search'
                    ]
                    )
            }
        })




        /*中奖统计*/
        // 中奖统计
        .state('field.winCount', {
            url: '/winCount?typeCode&startAt&endAt&page&size&showList',
            templateUrl: 'views/wincount/winCount.html',
            controller: 'winCount',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/winCount/winCount.js?ver='+versionNum
                )
            }
        })


        /*出票方统计*/
        // 出票方统计- 国信彩统计
        .state('field.drawerCount', {
            url: '/drawerCount?page&size&startAt&endAt',
            templateUrl: 'views/drawerCount/drawerCount.html',
            controller: 'drawerCountController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/drawerCount/drawerCount.js?ver='+versionNum,
                    'search'
                ]
                    )
            }
        })

        // 出票方统计- 国信彩彩种总计
        .state('field.lotteryTypes', {
            url: '/lotteryTypes?page&size&startAt&endAt',
            templateUrl: 'views/drawerCount/lotteryTypes.html',
            controller: 'lotteryTypesController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/drawerCount/lotteryTypes.js?ver='+versionNum,
                    'search'
                    ]
                    )
            }
        })

        // 出票方统计- 国信彩彩种总计详情
        .state('field.lotteryTypesDetail', {
            url: '/lotteryTypesDetail?page&size&lotteryType&startAt&endAt',
            templateUrl: 'views/drawerCount/lotteryTypesDetail.html',
            controller: 'lotteryTypesDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/drawerCount/lotteryTypesDetail.js?ver='+versionNum)
            }
        })


        // 出票方统计- 国信彩统计 - 日彩种统计
        .state('field.dayLotteryTypes', {
            url: '/dayLotteryTypes?&page&size&createAt',
            templateUrl: 'views/drawerCount/dayLotteryTypes.html',
            controller: 'dayLotteryTypesController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/drawerCount/dayLotteryTypes.js?ver='+versionNum)
            }
        })

        // 出票方统计- 明细
        .state('field.drawerCountDetails', {
            url: '/drawerCountDetails?&page&size&createAt&title&lotteryType&startAt&endAt',
            templateUrl: 'views/drawerCount/drawerCountDetails.html',
            controller: 'drawerCountDetailsController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/drawerCount/drawerCountDetails.js?ver='+versionNum)
            }
        })




        /*渠道统计*/
        //渠道管理
        .state('field.channelList', {
            url: '/channelList?page&size&startAt&lowestCount&channelName',
            templateUrl: 'views/channel/channelList.html',
            controller: 'channelList',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/channel/channelList.js?ver='+versionNum,
                    'search'
                ]
                    )
            }
        })
        //渠道管理-日明细
        .state('field.dayList', {
            url: '/dayList/?pageNo&pageSize&dateStart&dateEnd&channelNo',
            templateUrl: 'views/channel/dayList.html',
            controller: 'dayList',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/channel/dayList.js?ver='+versionNum)
            }
        })
        //渠道管理-购彩明细
        .state('field.shoppingList', {
            url: '/shoppingList/?pageNo&pageSize&channelNo&createAt',
            templateUrl: 'views/channel/shoppingList.html',
            controller: 'shoppingList',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/channel/shoppingList.js?ver='+versionNum)
            }
        })


        // 公共管理模块 (此处可以配置 但是不要删除 若操作记录没有的话 可以删除掉)
        // 登录登出
        .state('login', {
            url: '/login',
            templateUrl: 'views/admin/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/admin/loginController.js?ver='+versionNum)
            }
        })





        //后台管理

        //用户管理
        .state('field.manager', {
            url: '/manager?page',
            templateUrl: 'views/admin/manager.html',
            controller: 'ManagerCtrl',
            resolve: {
                loadMyFile: _lazyLoad(['js/controllers/admin/ptteng-managerController-0.0.1.js',
                'js/directives/pwd-check/pwCheck.js?ver='+versionNum
                ])
            }
        })
        //用户新增
        .state('field.managerDetail', {
            url: '/managerDetail/:id',
            templateUrl: 'views/admin/managerDetail.html',
            controller: 'ManagerDetailCtrl',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/ptteng-managerDetailController-0.0.1.js?ver='+versionNum)
            }
        })
        //角色管理
        .state('field.role', {
            url: '/role/:page',
            templateUrl: 'views/admin/role.html',
            controller: 'RoleCtrl',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/ptteng-roleController-0.0.1.js?ver='+versionNum)
            }
        })
        //角色新增
        .state('field.roleDetail', {
            url: '/roleDetail/:id',
            templateUrl: 'views/admin/roleDetail.html',
            controller: 'RoleDetailCtrl',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/ptteng-roleDetailController-0.0.1.js?ver='+versionNum)
            }
        })
        //模块管理
        .state('field.module', {
            url: '/module?page&size',
            templateUrl: 'views/admin/module.html',
            controller: 'ModuleCtrl',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/ptteng-moduleController-0.0.1.js?ver='+versionNum)
            }
        })
        //模块新增
        .state('field.moduleDetail', {
            url: '/moduleDetail/:id',
            templateUrl: 'views/admin/moduleDetail.html',
            controller: 'ModuleDetailCtrl',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/ptteng-moduleDetailController-0.0.1.js?ver='+versionNum)
            }
        })
        //密码修改
        .state('field.pwd', {
            url: '/pwd',
            templateUrl: 'views/admin/pwdSetting.html',
            controller: 'PwdCtrl',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/ptteng-pwdController-0.0.1.js?ver='+versionNum)
            }
        })

        //新添操作记录
        .state('field.operatingRecord', {
            url: '/operatingRecord/:operateStart/:operateEnd/:managerName/:operate/:roleID',
            templateUrl: 'views/admin/operatingRecord.html',
            controller: 'operatingRecordCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/operatingRecordCtrl.js?ver='+versionNum)
            }
        })
        //操作记录详情
        .state('field.recordDetail', {
            url: '/recordDetail/:id',
            templateUrl: 'views/admin/recordDetail.html',
            controller: 'recordDetailCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/recordDetailCtrl.js?ver='+versionNum)
            }
        })


}
