angular.module("admin").controller("lineRecharge",["$rootScope","$scope","$state","userService","$modal","$timeout",function(e,c,a,l,i,n){var o=this;o.subclick=a.params,o.subclick.happenAt=(new Date).getTime(),o.subclickgo=function(){o.lineRechargeModal.hide(),l.lineRecharge(o.subclick.mobile,o.subclick).then(function(c){0===c.data.code?(e.rechargeAlert("您已充值成功",c.data.data.id,o.subclick.mobile),a.go(a.current,o.searchParams,{reload:!0})):e.alert(c.data.message)})},o.clean=function(){angular.forEach(o.subclick,function(e,c){"size"!==c&&(o.subclick[c]="")})},o.lineRechargeaction=function(){var c=new Date;return o.subclick.happenAt&&null!=o.subclick.happenAt?o.subclick.happenAt>c?(e.alert("充值时间不能晚于当前时间"),!1):void(0!=o.subclick.money?o.lineRechargeModal.show():(e.alert("充值金额不允许为0"),o.subclick.money="")):(e.alert("请填写充值时间"),!1)},o.mobilechange=function(){o.subclick.mobile&&(o.subclick.mobile=o.subclick.mobile.replace(/[^0-9]/g,""))},o.lineRechargeModal=i({templateUrl:"lineRecharge.html",scope:c,show:!1})}]);