angular.module("admin").controller("pushSetController",["$rootScope","$scope","$state","parameterService",function(a,t,e,r){function s(){r.getArticleList(n.searchParams).then(function(t){0==t.data.code?(n.list=t.data.data.articleList,n.total=t.data.data.total):a.alert(t.data.message)})}var n=this;n.searchParams=e.params,n.searchParams.startAt=parseInt(n.searchParams.startAt)||void 0,n.searchParams.endAt=parseInt(n.searchParams.endAt)||void 0,n.searchParams.type=4,s(),n.pushDelete=function(t,s){a.operationConfirm("您确定删除这条数据?","你确定要执行删除操作吗？",function(){r.deleteArticle(t).then(function(t){0===t.data.code?a.alert("已成功删除",function(){n.list.splice(s,1)}):a.alert(t.data.message,e.go(e.current,{},{reload:!0}))})})}}]);