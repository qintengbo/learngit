"use strict";angular.module("admin").controller("RoleDetailCtrl",["$state","$scope","$rootScope","commonUtil","roleService","managerService","moduleService",function(e,a,t,o,n,d,r){var s=a.vm={};s.id=e.params.id,s.moduleList=[],s.permissionsSet=[],s.mid_module={};var i=function(){var e={};return angular.forEach(s.moduleList,function(a,t,n){angular.forEach(a.nodes,function(a,t,n){if(a.use){var d=[];a.create&&d.push("create"),a.update&&d.push("update"),a["delete"]&&d.push("delete"),a.sort&&d.push("sort"),e[a.id]=d,o.arrayContains(e,a.parentID)||(e[a.parentID]=[])}})}),e};r.getModuleList({size:65535}).then(function(e){0==e.data.code?r.batchGetModule(e.data.data.ids).then(function(e){0==e.data.code?(s.moduleList=o.buildTree(e.data.data.moduleList),console.log(s.moduleList),s.id?n.getRole(s.id).then(function(e){0==e.data.code&&(s.name=e.data.data.role.name,s.currentModuleList=e.data.data.role.permissionsSet,angular.forEach(s.moduleList,function(e){angular.forEach(e.nodes,function(e){angular.forEach(s.currentModuleList,function(a,t){e.id==t&&(e.use=!0,e.create=a.in_array("create"),e.update=a.in_array("update"),e["delete"]=a.in_array("delete"),e.sort=a.in_array("sort"))})})}))}):console.log("create new role")):o.showErrMsg(e)}):o.showErrMsg(e)}),s.changeAll=function(){var e=s.moduleList.$selected;angular.forEach(s.moduleList,function(a){a.$checked=e,angular.forEach(a.nodes,function(a){a.use=e,a.create=e,a.update=e,a["delete"]=e,a.sort=e})})},s.changeModule=function(e){var a=s.moduleList[e].$checked;angular.forEach(s.moduleList[e].nodes,function(e){e.use=a,e.create=a,e.update=a,e["delete"]=a,e.sort=a})},s.changeSubModule=function(e,a){var t=s.moduleList[e].nodes[a].use;s.moduleList[e].nodes[a].create=t,s.moduleList[e].nodes[a].update=t,s.moduleList[e].nodes[a]["delete"]=t,s.moduleList[e].nodes[a].sort=t},s.saveOrUpdate=function(e){e?s.data={id:s.id,name:s.name,permissionsSet:i()}:s.data={name:s.name,permissionsSet:i()},sessionStorage.mineSide="",n.saveOrUpdateRole(s.id,s.data,"field.role")}}]);