"use strict";angular.module("admin").directive("ngThumb",["$window",function(e){var i={support:!(!e.FileReader||!e.CanvasRenderingContext2D),isFile:function(i){return angular.isObject(i)&&i instanceof e.File},isImage:function(e){var i="|"+e.type.slice(e.type.lastIndexOf("/")+1)+"|";return"|jpg|png|jpeg|bmp|gif|".indexOf(i)!==-1}};return{restrict:"A",template:"<canvas/>",link:function(e,t,n){function a(e){var i=new Image;i.onload=r,i.src=e.target.result}function r(){var e=s.width||this.width/this.height*s.height,i=s.height||this.height/this.width*s.width;h.attr({width:e,height:i}),h[0].getContext("2d").drawImage(this,0,0,e,i)}if(i.support){var s=e.$eval(n.ngThumb);if(i.isFile(s.file)&&i.isImage(s.file)){var h=t.find("canvas"),d=new FileReader;d.onload=a,d.readAsDataURL(s.file)}}}}}]);