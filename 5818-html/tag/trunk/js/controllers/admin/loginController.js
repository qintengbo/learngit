angular.module("admin").controller('LoginController', ['$state', '$cookies', '$timeout', 'loginService','managerService','recordCookies','$rootScope', LoginController]);

function LoginController($state, $cookies, $timeout, loginService, managerService, recordCookies, $rootScope) {
    var vm = this;
    vm.verfityBtn = '获取验证码'
    vm.resetParams = {};





    //发送验证码
    vm.getVerify = function (type) {
        var params =
        {
            type: type,
            mobile: vm.resetParams.phone
        };
        if(!params.mobile){
            $rootScope.alert('请输入手机号')
            return false
        }

        loginService.getVerify(params).then(function (res) {
            if (res.data.code == 0) {
                vm.verfityBtn = '验证码已发送'
                $timeout(function () {
                    vm.verfityBtn = '获取验证码'
                }, 60000)
            }
            else {
                $rootScope.alert(res.data.message)
            }
        })
    };


    //重置密码
    vm.reset = function () {
        loginService.resetPassWord(vm.resetParams).then(function (res) {
            if (res.data.code == 0) {

            }
            else {
                $rootScope.alert(res.data.message)
            }
        })
    }


    //登录
    vm.submit = function () {
        var params = {
            name: vm.name,
            pwd: vm.pwd
        };

        //验证图形验证码
        loginService.checkImgVerify({inputValue:vm.imgVerify}).then(function(res){
            if(res.data.code==0){
                //登录
                loginService.login(params).then(function (res) {
                    if (res.data.code == 0) {
                        $cookies.login = "true";
                        $state.go("field.dashboard");
                        recordCookies({managerID: res.data.data.manager.id, roleID: res.data.data.manager.roleID});
                        managerService.saveSelfDetail(res.data.data);
                    } else {
                        vm.errorTip = res.data.message;
                        $timeout(function () {
                            vm.errorTip = "";
                        }, 3000);
                    }
                });
            }
            else{
                $rootScope.alert(res.data.message)
            }
        });



    }
}