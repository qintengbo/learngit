angular.module("admin").directive("search",function(){return{restrict:"EA",templateUrl:"js/directives/searchParams/search-params.html",replace:!0,scope:{params:"="},controller:["$state","commonUtil","$scope",function(a,r,e){e.search=function(){a.go(a.current,r.querySearchParams(e.params),{reload:!0})},e.clean=function(){angular.forEach(e.params,function(a,r){"size"!==r&&(e.params[r]="")})}}]}});