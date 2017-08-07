/**
 * Created by gaogao on 16/7/23.
 */
angular.module("admin").controller("lotterySkillController", function ($scope, $state, parameterService, $rootScope) {
    var vm = this;
    //将彩票信息取出
    vm.lotteryInfo=JSON.parse(sessionStorage.lotteryInfo);
    vm.searchParams = $state.params;

    // 初始化时页面page为1
    if ($state.params.page === undefined) {
        $state.params.page = 1;
    }

    vm.searchParams.startAt=parseInt(vm.searchParams.startAt) || undefined;
    vm.searchParams.endAt=parseInt(vm.searchParams.endAt) || undefined;


    //获取技巧列表
    function getArticleList() {
        vm.searchParams.lotteryType=vm.lotteryInfo.lotteryType;
        vm.searchParams.type = 1;
        parameterService.getArticleList(vm.searchParams).then(function (res) {
            if(res.data.code==0){
                vm.total = res.data.data.total;
                $state.params.size = res.data.data.size;
                // $state.params.page = res.data.data.page;
                console.log(res);
                vm.list = res.data.data.articleList;
                console.log(vm.list)
            }
            else{
                $rootScope.alert(res.data.message   )
            }

        })
    }

    getArticleList();

    //删除彩票技巧
    $scope.deleteLottery = function (id) {
        $rootScope.confirm("您确定要删除这条记录?", function () {
            parameterService.deleteArticle(id).then(function (res) {
                if (res.data.code == 0) {
                    $rootScope.alert("已成功删除",function(){
                        $state.go($state.current, {}, {reload: true})
                    })
                }
            })
        })


    };

    //保存排序  购彩技巧为type1
    $scope.saveDrop = function () {

        vm.ids=[];
        angular.forEach(vm.list,function(data,index){
            vm.ids[index]=data.id
        });
        console.log(vm.ids);

        $rootScope.confirm("是否保存此排序?", function () {
            parameterService.saveDrop(vm.ids).then(function (res) {
                if(res.data.code==0){
                    $rootScope.alert("已保存排序", $state.go($state.current,vm.searchParams, {reload: true}));
                }
                else{
                    $rootScope.alert(res.data.message, $state.go($state.current, vm.searchParams, {reload: true}));
                }

            })
        })
    }

});