web.directive('simpleUpload', [
  'simpleUploadService',
  function (simpleUploadService) {
    return {
      restrict: 'AE',
      scope: {
        ngModel: '=',
        multi: '@'
      },
      require: 'ngModel',
      template: '' + '<div class="uploader-box" ng-click="triggerSelect()">' + '<img ng-if="img" ng-src="{{img}}" />' + '<span ng-if="uploadStatus">\u4e0a\u4f20\u4e2d...</span>' + '<p ng-if="!img">\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247</p>' + '</div>' + '<input class="hidden" type="file" id="fileInput" onchange="angular.element(this).scope().uploadFile(this.files);">' + '',
      link: function (scope, element, attrs, ctrl) {
        scope.img = scope.ngModel;
        // 是否处于上传中状态
        scope.uploadStatus = false;
        // 点击div触发input:file
        scope.triggerSelect = function () {
          element.children('input[type=file]').trigger('click');
        };
        // 获取上传类型
        var type = attrs.type || 0;
        // 上传
        scope.uploadFile = function (files) {
          var fd = new FormData();
          fd.append('file', files[0]);
          scope.uploadStatus = true;
          simpleUploadService.uploadFile(type, fd).then(function (res) {
            scope.img = res.data.url;
            scope.uploadStatus = false;
            ctrl.$setViewValue(scope.img);
          });
        };
      },
      controller: function ($scope, $element, $attrs) {
      }
    };
  }
]);