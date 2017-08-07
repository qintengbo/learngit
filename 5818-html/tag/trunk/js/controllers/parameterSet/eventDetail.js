/**
 * Created by gaogao on 16/7/19.
 */
angular.module("admin").controller('eventDetailController', ['$scope', '$rootScope', '$state', 'parameterService', 'FileUploader', 'uploadService', '$timeout',
    function ($scope, $rootScope, $state, parameterService, FileUploader, uploadService, $timeout) {
        var vm = this;
        vm.params = {};
        vm.id = $state.params.id;
        vm.params.type = 3;
        vm.redList=[];

        // 奖品数组
        vm.prize = [
            {
                type: '1',
                content: ''
            },
            {
                type: '2',
                content: ''
            },
            {
                type: '3',
                list: [
                    {
                        id: "",
                        counts: ""
                    }
                ]
            }
        ];
        console.log(vm.prize[0].content == '');


        //获取红包列表
        function getRedSet() {
            parameterService.getRedSet({page:1,size:9999}).error(function () {
            }).then(function (res) {
                if(res.data.code==0){
                    console.log(res.data.data);

                    angular.forEach(res.data.data,function(data){
                        //只有已上线并且结束未过期的才可以
                        if(data.status==2 && data.endAt>$rootScope.nowDate) {
                            vm.redList.push(data)
                        }
                    })
                }
                else{
                    $rootScope.alert(res.data.message)
                }

            })

        }


        getRedSet()


        if (!vm.id) {

            //活动新增
            vm.adviertisementAdd = function (invalid) {
                if(invalid){
                    vm.error=true;
                    $timeout(function(){
                        vm.error=false
                    },3000)
                }
                else{
                    var params = angular.copy(vm.prize)

                    //将没有东西的json删除出去
                    for (var i = 0; i < params.length; ++i) {
                        if (params[i].content == '' && params[i].type != 3) {
                            params.splice(i, 1);
                            i = i - 1;
                        }

                        else if (params[i].type == 3) {


                            for (var e = 0; e < params[i].list.length; e++) {
                                if(params[i].list[e].id && (!params[i].list[e].counts||params[i].list[e].counts==null )){
                                    $rootScope.alert("请填写红包个数");
                                    return false
                                }
                                if(params[i].list[e].counts && (!params[i].list[e].id||params[i].list[e].id==null )){
                                    $rootScope.alert("请选择红包种类");
                                    return false
                                }



                                if (params[i].list[e].counts == '' || params[i].list[e].id == '') {
                                    params[i].list.splice(e, 1)
                                }

                            }
                            if (params[i].list.length == 0) {
                                params.splice(i, 1)
                            }
                        }

                    }
                    //将没有东西的json删除出去
                    if(!params||params.length==0){
                        $rootScope.alert("请至少填写一种奖品")
                        return false
                    }

                    //这里需要处理下 时间选择器 选择的都是凌晨 0:00   需要 23:59
                    if(vm.params.endAt){
                        vm.params.endAt=parseInt(vm.params.endAt)+86400000 - 1;
                    }
                    console.log(JSON.stringify(params));

                    vm.params.prize = JSON.stringify(params);
                    parameterService.addArticle(vm.params).then(function (res) {
                        if (res.data.code === 0) {
                            $rootScope.alert("添加成功", $state.go("field.eventSet", {}, {reload: true}));
                        }
                        else {
                            $rootScope.alert(res.data.message);
                        }
                    })
                }

            }
        } else {
            //获取活动信息
            parameterService.putArticleDetail(vm.id).then(function (res) {
                if (res.data.code === 0) {
                    vm.params = res.data.data.article;
                    //vm.prize = JSON.parse(res.data.data.article.prize);
                    var resPrize = JSON.parse(res.data.data.article.prize);
                    angular.forEach(resPrize, function (res) {
                        angular.forEach(vm.prize, function (prize) {
                            if (res.type == prize.type && prize.type != 3) {
                                prize.content = res.content
                                console.log(prize.content)
                            }
                            else if (prize.type == 3) {
                                if(res.list){
                                    prize.list = res.list
                                }
                                else{
                                    prize.list=[
                                        {
                                            id: "",
                                            counts: ""
                                        }
                                        ]
                                }
                            }

                        })
                    });
                    console.log(vm.prize);
                }
                else {
                    $rootScope.alert(res.data.message)
                }
            });
            //活动编辑
            vm.adviertisementAdd = function (invalid) {
                if(invalid){
                    vm.error=true;
                    $timeout(function(){
                        vm.error=false;
                    },3000)
                }
                else{
                    var params = angular.copy(vm.prize)
                    //将没有东西的json删除出去
                    for (var i = 0; i < params.length; ++i) {
                        if (params[i].content == '' && params[i].type != 3) {
                            params.splice(i, 1);
                            i = i - 1;
                        }

                        else if (params[i].type == 3) {
                            for (var e = 0; e < params[i].list.length; e++) {
                                if(params[i].list[e].id && (!params[i].list[e].counts||params[i].list[e].counts==null )){
                                    $rootScope.alert("请填写红包个数");
                                    return false
                                }
                                if(params[i].list[e].counts && (!params[i].list[e].id||params[i].list[e].id==null )){
                                    $rootScope.alert("请选择红包种类");
                                    return false
                                }

                                if (params[i].list[e].counts == '' || params[i].list[e].id == '') {
                                    params[i].list.splice(e, 1)
                                }
                            }
                            if (params[i].list.length == 0) {
                                params.splice(i, 1)
                            }
                        }
                    }
                    //将没有东西的json删除出去
                    if(!params||params.length==0){
                        $rootScope.alert("请至少填写一种奖品")
                        return false
                    }

                    vm.params.prize = JSON.stringify(params);


                    parameterService.putArticle(vm.id, vm.params).then(function (res) {
                        console.log(vm.params);
                        if (res.data.code === 0) {
                            $rootScope.alert("修改成功", $state.go("field.eventSet", {}, {reload: true}));
                        }
                        else {
                            $rootScope.alert(res.data.message);
                        }
                    })
                }

            }
        }
        // 上传图片
        FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
            return true;
        };
        vm.uploader = new FileUploader({});
        vm.uploader = uploadService.uploadFile(FileUploader);
        vm.uploader.onSuccessItem = function (fileItem, response, status, headers) {
            if (status == 200) {
                vm.params.img = response.data.url;
            }
        };
        // 红包文本
        vm.text = function (index) {
            var bb = vm.prize[2].list;
            var length = bb.length;
            if (index == length - 1) {
                return "+添加"
            }
            else {
                return " 删除 "
            }
        };
        // 添加或是删除
        vm.addlist = function (index) {
            var bb = vm.prize[2].list;
            var length = bb.length;
            if (index == length - 1) {
                angular.forEach(bb, function (data) {
                    if (data.counts == '' || data.id == '') {
                        $rootScope.alert("请先将先前添加的红包填写完成再进行添加")
                    }
                    else {
                        bb.push({});
                    }
                })
            } else {
                bb.splice(index, 1)
            }
        };


    }]);