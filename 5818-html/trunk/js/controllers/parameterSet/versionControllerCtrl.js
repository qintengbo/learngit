/**
 * Created by gaogao on 16/9/25.
 */
'use strict';
angular.module('admin').controller('versionControllerCtrl',['parameterService',function(parameterService){
        var vm =this;

        //获取版本列表
        parameterService.getArticleList({type:8}).then(function(res){
                if(res.data.code==0){
                        vm.versionList=res.data.data.articleList;
                }
        })

}])