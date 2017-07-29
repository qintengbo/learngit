/**
 * Created by qintengbo on 2017/7/8.
 */

'use strict';
var app = angular.module("app", ['ui.router', 'oc.lazyLoad']);
app.config(registerComponents);

//$http配置
function httpConfig($httpProvider) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
}

function registerComponents($controllerProvider, $compileProvider, $filterProvider, $provide) {
    // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任意可以添加功能
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
}
