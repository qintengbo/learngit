/**
 * Created by Administrator on 2015/11/5.
 */
angular.module('admin').directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val() === $(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    };
  }]);