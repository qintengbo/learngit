angular.module("admin").controller("orderDetailsEMDetails",["$rootScope","$scope","$state","userService",function(a,e,r,t){var s=this;s.params=r.params,t.orderDetailsMDetails(s.params.id).then(function(a){s.orderDetailsEMList=a.data.data})}]);