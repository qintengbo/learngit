angular.module("admin").controller("drawerCountDetailsController",["$scope","$state","drawerCountService",function(a,t,e){var r=this;void 0===t.params.page&&(t.params.page=1),r.searchParams=t.params;var s=angular.copy(r.searchParams);delete s.title,r.title=r.searchParams.title,e.drawerCountDetailsList(s).then(function(a){0==a.data.code&&(r.total=a.data.data.total,t.params.size=a.data.data.size,r.list=a.data.data.list)})}]);