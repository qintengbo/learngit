angular.module("admin").controller("withdrawalsRecord",["$rootScope","$scope","$state","userService",function(a,e,s,t){var r=this;r.params=s.params,r.showName=s.params.showName,t.withdrawalsRecordList(r.params.userId,{page:r.params.page,size:r.params.size}).then(function(e){0===e.data.code?(r.withdrawalsRecordList=e.data.data,r.params.page=e.data.page,r.params.size=e.data.size,r.params.total=e.data.total):a.alert(e.data.message)})}]);