"use strict";angular.module("admin").controller("versionControllerDetailCtrl",["$scope","uploadService","FileUploader","parameterService","$state","$rootScope",function(a,t,e,r,o,n){var i=this;i.params={},i.params.type=8,i.id=o.params.id,i.um=UM.getEditor("myEditor"),a.back=function(){i.um.destroy()},a.$on("$destroy",function(){a.back()}),r.putArticleDetail(i.id).then(function(a){0==a.data.code&&(i.params.status=a.data.data.article.status,i.params.version=a.data.data.article.version,i.params.content=a.data.data.article.content,i.params.url=a.data.data.article.url,i.params.title=a.data.data.article.title,i.params.summary=a.data.data.article.summary,i.um.setContent(i.params.content))}),a.submit=function(){n.confirm("是否确认更新版本",function(){i.params.content=i.um.getContentTxt(),r.putArticle(i.id,i.params).then(function(a){0==a.data.code?(n.alert(a.data.message),o.go("field.versionController",{reload:!0})):n.alert(a.data.message)})})}}]);