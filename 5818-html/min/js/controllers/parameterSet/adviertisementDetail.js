angular.module("admin").controller("adviertisementDetailController",["$rootScope","$scope","$state","parameterService","$timeout",function(a,t,e,r,i){var d=this;d.params=e.params,r.getlotteryTypeList().then(function(t){0==t.data.code?d.lotteryList=t.data.data.list:a.alert(t.data.message)}),d.params.type=5,d.params.id?(r.putArticleDetail(d.params.id).then(function(a){0===a.data.code&&(d.params=a.data.data.article)}),d.adviertisementAdd=function(t){d.params.status=t,r.putArticle(d.params.id,d.params).then(function(t){0===t.data.code?a.alert("修改成功",e.go("field.adviertisementSet",{},{reload:!0})):a.alert(t.data.message)})}):d.adviertisementAdd=function(t,s){s?(d.error=!0,i(function(){d.error=!1},3e3)):(d.params.status=t,r.addArticle(d.params).then(function(t){0===t.data.code?a.alert("添加成功",e.go("field.adviertisementSet",{},{reload:!0})):a.alert(t.data.message)}))}}]);