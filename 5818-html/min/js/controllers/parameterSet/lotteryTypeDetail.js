angular.module("admin").controller("lotteryTypeDetailController",["$scope","FileUploader","$state","$rootScope","uploadService","parameterService","$timeout",function(a,e,t,r,s,o,p){var i=this;i.id=t.params.id,e.FileSelect.prototype.isEmptyAfterSelection=function(){return!0},i.uploader=s.uploadFile(e),i.uploader.onSuccessItem=function(a,e,t,r){200==t&&(i.params.img=e.data.url)},o.getLotteryDetaiol(i.id).then(function(a){0==a.data.code?(i.params=a.data.data,2==i.params.hot?i.params.hot=!0:i.params.hot=!1,2==i.params.plusAward?i.params.plusAward=!0:i.params.plusAward=!1):r.alert(a.data.message)}),a.saveLotterySet=function(a,e){if(e)i.error=!0,p(function(){i.error=!1},3e3);else{var s={};1==i.params.hot?s.hot=2:s.hot=1,1==i.params.plusAward?s.plusAward=2:s.plusAward=1,s.name=i.params.name,s.status=a,s.slogan=i.params.slogan,s.img=i.params.img,s.status=a,s.issueCount=i.params.issueCount,s.startTime=i.params.startTime,s.endTime=i.params.endTime,o.saveLotterySet(i.id,s).then(function(a){0==a.data.code?t.go("field.lotteryTypeSet",{},{reload:!0}):r.alert("res.data.message")})}}}]);