angular.module("admin").controller("orderDetailsPMDetails",["$rootScope","$scope","$state","userService",function(a,e,t,r){var s=this;s.params=t.params,r.orderDetailsMDetails(s.params.id).then(function(e){0===e.data.code?s.orderDetailsPMList=e.data.data:a.alert(e.data.message)})}]);