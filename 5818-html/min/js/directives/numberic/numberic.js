angular.module("admin").directive("numberic",function(){return{require:"ngModel",restrict:"EA",scope:{max:"@",maxLength:"@",min:"@"},link:function(e,n,r,i){i.$parsers.push(function(n){if(void 0==n)return"";var r=+e.max,t=+e.maxLength,u=+e.min,a=n.replace(/[^^\d+(\.\d)?$]/g,"");return t&&n.length>t&&(a=n.slice(0,t)),r&&+a>r&&(a=r+""),u&&+a<u&&(a=u+""),a!=n&&(i.$setViewValue(a),i.$render()),a})}}}),angular.module("admin").directive("chinese",function(){return{require:"ngModel",restrict:"EA",scope:{max:"@",maxLength:"@",min:"@"},link:function(e,n,r,i){i.$parsers.push(function(n){if(void 0==n)return"";var r=+e.max,t=+e.maxLength,u=+e.min,a=n.replace(/[^a-zA-Z\u4e00-\u9fa5]+$/g,"");return t&&n.length>t&&(a=n.slice(0,t)),r&&+a>r&&(a=r+""),u&&+a<u&&(a=u+""),a!=n&&(i.$setViewValue(a),i.$render()),a})}}}),angular.module("admin").directive("onlyEnglish",function(){return{require:"ngModel",restrict:"EA",scope:{max:"@",maxLength:"@",min:"@"},link:function(e,n,r,i){i.$parsers.push(function(n){if(void 0==n)return"";var r=+e.max,t=+e.maxLength,u=+e.min,a=n.replace(/^[\u4e00-\u9fa50-9]*$/g,"");return t&&n.length>t&&(a=n.slice(0,t)),r&&+a>r&&(a=r+""),u&&+a<u&&(a=u+""),a!=n&&(i.$setViewValue(a),i.$render()),a})}}}),angular.module("admin").directive("onlyLotteryNum",function(){return{require:"ngModel",restrict:"EA",scope:{max:"@",maxLength:"@",min:"@"},link:function(e,n,r,i){i.$parsers.push(function(n){if(void 0==n)return"";var r=+e.max,t=+e.maxLength,u=+e.min,a=n.replace(/[^0-9|,]/g,"");return t&&n.length>t&&(a=n.slice(0,t)),r&&+a>r&&(a=r+""),u&&+a<u&&(a=u+""),a!=n&&(i.$setViewValue(a),i.$render()),a})}}});