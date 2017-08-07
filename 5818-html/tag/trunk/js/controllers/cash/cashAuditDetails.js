angular.module("admin").controller('cashAuditDetailsControl', ['$rootScope', '$scope', '$state', 'cashService', '$modal', 'commonUtil',
    function ($rootScope, $scope, $state, cashService, $modal, commonUtil) {
        var vm = this;
        vm.batchNo = $state.params.batchNo;
        vm.searchParams = $state.params;


        //搜索参数初始化
        !function () {
            vm.searchParams.cashStart = e(vm.searchParams.cashStart);
            vm.searchParams.cashEnd = e(vm.searchParams.cashEnd);
            vm.searchParams.checkStart = e(vm.searchParams.checkStart);
            vm.searchParams.checkEnd = e(vm.searchParams.checkEnd);
            delete vm.searchParams.batchNo;
            //判断是否有值,有则转成数字
            function e(e) {
                if (e)return e * 1
            }
        }();


        //查看这里是否都被处理了  如果都被处理了 就是false  如果没都被处理 还需要按钮 就为true
        function needAllDealBtn(){
            var ok= false;
            angular.forEach(vm.list,function(data){
                if(data.dealStatus==''||data.dealStatus==null){
                    ok=true
                }
            })
            return ok
        };


        //搜索刷新页面
        vm.cashDetailsGo = function () {
            $state.go($state.current, commonUtil.querySearchParams(vm.searchParams), {reload: true});
        };
        //清空参数
        vm.cleanSearch = function () {
            angular.forEach(vm.searchParams, function (data, index) {
                vm.searchParams[index] = ""
            });
            vm.cashDetailsGo()
        };
        // 获得提现详情列表;约定,提现审核type为1,提现处理type为2;
            cashService.cashDetails(vm.batchNo, 1, vm.searchParams).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    vm.list = res.data.data;
                    vm.total = res.data.total;
                    vm.isNeedAllDeal=needAllDealBtn();
                    //判断是否为全选
                    //全选
                    vm.all=function(){
                        vm.list= commonUtil.allList(vm.list,vm.allBtn)
                    };

                    //单个点击后
                    vm.onlyClick=function(){
                        vm.allBtn=commonUtil.isAllChoice(vm.list)
                    }
                } else {
                    $rootScope.alert(res.data.message);
                }
            })


        //获取审核拒绝理由
        vm.getAuditReason = function (id) {
            cashService.getAuditReason(id).then(function (res) {
                var message;
                if (res.data.code === 0) {
                    message = res.data.reason || '未填写';
                    $rootScope.cashConfirm("不予通过原因:", message, '确认')
                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        };

        //批次审核
        vm.cashAudits = function () {
            vm.detailList=[];
             vm.ids=[];
            angular.forEach(vm.list,function(data){
                    if(data.choice){
                        vm.ids.push(data.id)
                    }
            });
            if(vm.ids.length==0){
                $rootScope.alert("请选中需要批量通过的数据")
                return false
            }
            vm.checkMoneyListModal.show();


            //获取批量id的详情
            cashService.getCashAuditListDetail(vm.ids).then(function(res){
                if(res.data.code==0){
                    vm.detailList=res.data.data;
                    console.log(vm.detailList)
                }
            })

        };
        //批次审核同意
        vm.checkCashAudits=function(){
                //type 1为审核 2为提现   status1为通过 2为不通过
                var params={
                    ids:angular.copy(vm.ids),
                    type:1,
                    batchNo:vm.batchNo,
                };
            console.log(params)
                cashService.checkCashAuditList(params).then(function(res){
                    if(res.data.code==0){
                        vm.cashDetailsGo()
                        vm.checkMoneyListModal.hide();

                    }
                })
        }


        //批次审核结束




        //提现审核
        vm.cashAudit = {
            //审核确认model
            checkMoneyModal: function (id) {
                vm.detailList=[]

                //获取到操作的id
                this.data.withdrawalsId = id;
                vm.checkMoneyModal.show();
                delete this.data.reason;

                //获取某个id的详情
                cashService.getCashAuditOneDetails(id).then(function(res){
                        if(res.data.code==0){
                            vm.detailList.push(res.data.data);
                            console.log(vm.detailList)
                        }
                })
            },


            //开启模态框
            modal: function (id) {
                //获取到操作的id
                this.data.withdrawalsId = id;
                vm.cashAuditModal.show();
            },
            //切换模态框
            cashAuditReason: function () {
                vm.cashAuditModal.hide();
                vm.cashAuditReasonModal.show()

            },
            //审核同意
            agree: function () {
                //type1为审核状态 2 为提现状态
                this.data.type=1
                delete this.data.reason;
                //约定1为审核通过
                this.data.status = 1;
                console.log(this.data)

                cashService.cashAudit(this.data).then(function (res) {
                    if (res.data.code === 0) {
                        console.log(res);
                        vm.cashAuditModal.hide();
                        vm.checkMoneyModal.hide()
                        vm.cashDetailsGo()
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });

            },
            //审核拒绝
            fail: function () {
                //type1为审核状态 2 为提现状态
                this.data.type=1
                //约定2为审核不通过
                this.data.status = 2;
                console.log(this.data);
                cashService.cashAudit(this.data).then(function (res) {
                    if (res.data.code === 0) {
                        console.log(res);
                        vm.cashDetailsGo()
                        vm.cashAuditReasonModal.hide();
                        vm.checkMoneyModal.hide()
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });


            },
            //传值对象
            data: {}
        };

        //模态框初始化

        //确认钱数模态框(单个)
        vm.checkMoneyModal=$modal({
            templateUrl:'checkMoneyModal.html',
            scope:$scope,
            show:false
        })

        //确认钱数模态框(批次)
        vm.checkMoneyListModal=$modal({
            templateUrl:'checkMoneyListModal.html',
            scope:$scope,
            show:false
        })





        //     提现审核和拒绝理由
        vm.cashAuditModal = $modal({
            templateUrl: 'cashAudit.html',
            scope: $scope,
            show: false
        });



        vm.cashAuditReasonModal = $modal({
            templateUrl: 'cashAuditReason.html',
            scope: $scope,
            show: false
        });
    }]);
