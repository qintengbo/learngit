"use strict";angular.module("admin").controller("ManagerDetailCtrl",["$state","$scope","$rootScope","commonUtil","managerService","roleService",function(a,e,t,r,n,d){var o=e.vm={};o.id=a.params.id;var i={size:65535};e.roleList={},o.rechange=function(){return o.pwdSrue=o.data.pwd==o.data.newPwd},n.getManager(o.id).then(function(a){o.data=a.data.data.manager}),d.getRoleList(i).then(function(a){0==a.data.code?d.batchGetRole(a.data.data.ids).then(function(a){0==a.data.code?o.roleList=a.data.data.roleList:r.showErrMsg(a)}):r.showErrMsg(a)}),o.saveOrUpdate=function(){n.saveOrUpdateManager(o.id,o.data,"field.manager")}}]);