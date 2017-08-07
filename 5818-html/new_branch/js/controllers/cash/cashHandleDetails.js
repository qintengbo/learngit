angular.module("admin").controller('cashHandleDetailsControl', ['$rootScope', '$scope', '$modal','$state', 'cashService', 'commonUtil',
        function ($rootScope, $scope,$modal, $state, cashService, commonUtil) {
            var vm = this;
            vm.batchNo = $state.params.batchNo;
            vm.searchParams = $state.params;
            //初始化参数
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




            //查看这里是否都被处理了  如果都被处理了 就是false  如果没都被处理 还需要按钮 就为true
            function needAllDealBtn(){
                var ok= false;
                angular.forEach(vm.list,function(data){
                    if(data.dealStatus==''||data.dealStatus==null||data.dealStatus==4){
                        ok=true
                    }
                })
                return ok
            };



            // 获得提现详情列表;约定,提现审核type为1,提现处理type为2;
                cashService.cashDetails(vm.batchNo, 2, vm.searchParams).then(function (res) {
                    if (res.data.code === 0) {
                        vm.list=res.data.data;
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
                });





            //导出excel
            vm.getExcel=function(){
                vm.detailList=[];
                vm.ids=[];
                angular.forEach(vm.list,function(data){
                    if(data.choice){
                        vm.ids.push(data.id)
                    }
                });
                if(vm.ids.length==0){
                    $rootScope.alert("请选中需要导出Excel的数据");
                    return false
                }

                //获取批量id的详情
                cashService.getCashAuditListDetail(vm.ids,'excel').then(function(res){
                    if(res.data.code==0){
                        //vm.detailList=res.data.data;
                        var url=location.origin+res.data.url;
                        location.href=url
                    }
                    else{
                        $rootScope.alert(res.data.message)
                    }
                })
            }




            //批量提现
            vm.checkCashHandleList={
                //获取批量详情
                getCashHandleListDetail:function(){
                    vm.detailList=[];
                    vm.ids=[];
                    angular.forEach(vm.list,function(data){
                        if(data.choice){
                            vm.ids.push(data.id)
                        }
                    });
                    if(vm.ids.length==0){
                        $rootScope.alert("请选中需要批量通过的数据");
                        return false
                    }
                    vm.checkMoneyListModal.show();


                    //获取批量id的详情
                    cashService.getCashAuditListDetail(vm.ids).then(function(res){
                        if(res.data.code==0){
                            vm.detailList=res.data.data;
                        }
                    })
                },
                //批量通过提现
                checkCashHandleList:function(){
                //type 1为审核 2为提现   status1为通过 2为不通过
                var params={
                    ids:angular.copy(vm.ids),
                    type:2,
                    batchNo:vm.batchNo,
                };
                cashService.checkCashAuditList(params).then(function(res){
                    if(res.data.code==0){
                        vm.checkMoneyListModal.hide();
                        vm.cashDetailsGo()

                    }
                })
            }

            }


            ////单条提交提现处理
            //vm.cashHandleSingle = function (params) {
            //    cashService.cashHandle(params).then(function (res) {
            //        if (res.data.code === 0) {
            //            vm.cashList = res.data.data;
            //        } else {
            //            $rootScope.alert(res.data.message);
            //        }
            //    });
            //};

            //获取提现失败理由
            vm.cashHandleReason = function (id) {
                cashService.getAuditReason(id).then(function (res) {
                    if (res.data.code === 0) {
                        res.data.data.message = res.data.data.message || '未填写';
                        $rootScope.cashConfirm("提现失败:", message, '确认')
                    } else {
                        // $rootScope.alert(res.data.message);
                        //测试弹窗
                        $rootScope.cashConfirm("提现失败:", "未填写", '确认')
                    }
                });
            };



            //提现审核 (单个)
            vm.checkCashHandle=
            {
                //切换模态框
                cashAuditReason: function () {
                    vm.cashHandleReasonModal.show()
                    vm.cashHandleModal.hide();

                },


                //单个 查看详情
                getCashHandleOneDetail:function(id){
                    this.data.withdrawalsId = id;
                    this.data.type=2;
                    vm.detailList=[];
                    vm.checkMoneyModal.show();
                    delete this.data.reason;
                    //获取某个id的详情
                    cashService.getCashAuditOneDetails(id).then(function(res){
                        if(res.data.code==0){
                            vm.detailList.push(res.data.data);
                        }
                    })
                },


                //单个 通过的方法
                pass:function(){
                    this.data.status=1;
                    delete this.data.reason;

                    cashService.cashAudit(this.data).then(function (res) {
                        if (res.data.code === 0) {
                            vm.cashHandleModal.hide();
                            vm.checkMoneyModal.hide()
                            vm.cashDetailsGo()
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                },
                //单个 拒绝的方法

                fail:function(){
                    this.data.status=2;

                    cashService.cashAudit(this.data).then(function (res) {
                        if (res.data.code === 0) {
                            vm.cashHandleModal.hide();
                            vm.checkMoneyModal.hide()
                            vm.cashHandleReasonModal.hide()
                            vm.cashDetailsGo()
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });

                },
                data:{}
            }



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
            vm.cashHandleModal = $modal({
                templateUrl: 'cashAudit.html',
                scope: $scope,
                show: false
            });



            vm.cashHandleReasonModal = $modal({
                templateUrl: 'cashHandleReasonModal.html',
                scope: $scope,
                show: false
            });

        }]);
