function MainController(r){!r.permissionSet&&localStorage.permissionsSet&&(r.permissionSet=JSON.parse(localStorage.permissionsSet)),Array.prototype.in_array=function(r){for(var o=0;o<this.length;o++)if(this[o]==r)return!0;return!1}}angular.module("admin").controller("MainController",["$rootScope",MainController]);