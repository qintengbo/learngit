angular.module("admin").controller("tieCardManage",["$rootScope","$scope","$state","userService",function(a,t,e,r){var s=this;s.params=e.params,s.searchParams=e.params,s.size=10,!function(){function a(a){if(a)return 1*a}s.searchParams.startAt=a(s.searchParams.startAt),s.searchParams.endAt=a(s.searchParams.endAt),s.totalRecharge=0}(),r.getBankList().then(function(t){0==t.data.code?s.bankList=t.data.data.list:a.alert(t.data.message)}),r.tieCardManageList(s.searchParams).then(function(t){0===t.data.code?s.tieCardManageList=t.data.data:a.alert(t.data.message),s.searchParams.total=t.data.total,s.searchParams.page=t.data.page,s.searchParams.size=t.data.size}),t.deletever=function(t,e){a.confirm("您确定要解除绑定？",function(){r.deltieCardManage(t).then(function(t){0===t.data.code&&a.alert("已成功解除",function(){s.tieCardManageList.splice(e,1)})})})}}]);