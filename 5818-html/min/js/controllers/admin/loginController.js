function LoginController(e,a,t,r,o,n,i){var d=this;d.verfityBtn="获取验证码",d.resetParams={},d.getVerify=function(e){var a={type:e,mobile:d.resetParams.mobile};return a.mobile?void r.getVerify(a).then(function(e){0==e.data.code?(d.verfityBtn="验证码已发送",t(function(){d.verfityBtn="获取验证码"},6e4)):i.alert(e.data.message)}):(i.alert("请输入手机号"),!1)},d.reset=function(){r.resetPassWord(d.resetParams).then(function(a){0==a.data.code?(i.alert("重置密码成功",function(){e.go(e.current,{},{reload:!0})}),e.go(e.current,{},{reload:!0})):i.alert(a.data.message)})},d.submit=function(){var l={name:d.name,pwd:d.pwd};r.checkImgVerify({inputValue:d.imgVerify}).then(function(c){0==c.data.code?r.login(l).then(function(r){0==r.data.code?(a.login="true",e.go("field.dashboard"),n({managerID:r.data.data.manager.id,roleID:r.data.data.manager.roleID}),o.saveSelfDetail(r.data.data)):(d.errorTip=r.data.message,t(function(){d.errorTip=""},3e3))}):i.alert(c.data.message)})}}angular.module("admin").controller("LoginController",["$state","$cookies","$timeout","loginService","managerService","recordCookies","$rootScope",LoginController]);