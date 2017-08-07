/**
 * Created by gaogao on 16/7/19.
 */
angular.module("admin").controller('lotteryTypeDetailController',function($scope,FileUploader,$state,$rootScope,uploadService,parameterService,$timeout){
    var vm =this;
    vm.id=$state.params.id;

    //上传文件
    FileUploader.FileSelect.prototype.isEmptyAfterSelection = function(){
        return true;
    };
    vm.uploader = uploadService.uploadFile(FileUploader);
    vm.uploader.onSuccessItem = function(fileItem, response, status, headers) {
        if (status == 200) {
            vm.params.img = response.data.url;
        }
    };

    //获取彩种详情
    parameterService.getLotteryDetaiol(vm.id).then(function(res){
        if(res.data.code==0){
            vm.params=res.data.data;
            vm.params.hot==2?vm.params.hot=true:vm.params.hot=false;
            vm.params.plusAward==2?vm.params.plusAward=true:vm.params.plusAward=false;
        }
        else{
            $rootScope.alert(res.data.message)
        }
    })


    //保存设置
    $scope.saveLotterySet=function(status,invalid){
        if(invalid){
            vm.error=true;
            $timeout(function(){
                vm.error=false
            },3000)
        }
        else{
            var params={};
            vm.params.hot==true?params.hot=2:params.hot=1;
            vm.params.plusAward==true?params.plusAward=2:params.plusAward=1;
            params.name=vm.params.name;
            params.status=status;
            params.slogan=vm.params.slogan;
            params.img=vm.params.img;
            params.status=status;
            params.issueCount=vm.params.issueCount;
            params.startTime=vm.params.startTime;
            params.endTime=vm.params.endTime;
            parameterService.saveLotterySet(vm.id,params).then(function(res){
                console.log(res)
                if(res.data.code==0){
                    $state.go("field.lotteryTypeSet",{},{reload:true})

                }
                else{
                    $rootScope.alert("res.data.message")
                }
            })
        }

    }


});