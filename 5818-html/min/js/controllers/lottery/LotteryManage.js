angular.module("admin").controller("LotteryManage",["$rootScope","$scope","$state","lotteryService",function(t,a,e,o){var r=this;r.params=e.params,r.size=10,o.LotteryList().then(function(a){0===a.data.code?(r.LotteryList=a.data.data.data,r.total=a.data.data.total):t.alert(a.data.message)})}]);