/**
 * Created by qintengbo on 2017/6/24.
 */

//自定义翻页指令
app.directive("customFlip", function($state) {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            conf: "="
        },
        template: '<div class="pagfot clearfix">' +
        '<ul class="pagin" ng-show="conf.totalItems > 0">' +
        '<li class="pagnum" ng-class="{nochoice: conf.currentPage == 1}" ng-click="firstPage()">首页</li>' +
        '<li class="pagnum" ng-class="{nochoice: conf.currentPage == 1}" ng-hide="conf.currentPage == 1" ng-click="prevPage()">‹</li>' +
        '<li class="pagnum" ng-repeat="item in pageList track by $index" ' +
        'ng-class="{pitch: item == conf.currentPage, separate: item == \'···\'}" ' +
        'ng-click="changeCurrentPage(item)">{{ item }}' +
        '</li>' +
        '<li class="pagnum" ng-class="{nochoice: conf.currentPage == conf.numberOfPages}" ng-hide="conf.currentPage == conf.numberOfPages" ng-click="nextPage()">›</li>' +
        '<li class="pagnum" ng-class="{nochoice: conf.currentPage == conf.numberOfPages}" ng-click="lastPage()">末页</li>' +
        '<li class="pagnum_t">去第<input class="pagfot_input" type="text" ng-model="jumpPageNum">页</li>' +
        '<li class="pagnum pag_mar" ng-click="jumpToPage()">确定</li>' +
        '</ul>',
        link: function(scope) {
            var conf = scope.conf;
            // pageList数组
            function getPagination() {
                // conf.currentPage
                if(conf.currentPage) {
                    conf.currentPage = parseInt(scope.conf.currentPage, 10);
                }
                // conf.currentPage? conf.currentPage = parseInt(scope.conf.currentPage, 10) : '';
                if(!conf.currentPage) {
                    conf.currentPage = $state.params.page;
                }
                // conf.totalItems
                if(conf.totalItems) {
                    conf.totalItems = parseInt(conf.totalItems, 10);
                }
                // conf.totalItems
                if(!conf.totalItems) {
                    conf.totalItems = 0;
                }
                // conf.itemsPerPage
                if(conf.itemsPerPage) {
                    conf.itemsPerPage = parseInt(conf.itemsPerPage, 10);
                }
                if(!conf.itemsPerPage) {
                    conf.itemsPerPage = 10;
                }
                // 分页总数
                conf.numberOfPages = Math.ceil(conf.totalItems / conf.itemsPerPage);
                // 如果分页总数>0，并且当前页大于分页总数
                if(scope.conf.numberOfPages > 0 && scope.conf.currentPage > scope.conf.numberOfPages){
                    scope.conf.currentPage = scope.conf.numberOfPages;
                }
                // 页码相关
                scope.pageList = [];
                if(conf.numberOfPages <= conf.pagesLength){
                    // 判断总页数如果小于等于分页的长度，若小于则直接显示
                    for(var i = 1; i <= conf.numberOfPages; i++){
                        scope.pageList.push(i);
                    }
                }else{
                    // 总页数大于分页长度（此时分为三种情况：1.左边没有...2.右边没有...3.左右都有...）
                    // 计算中心偏移量
                    var offset = (conf.pagesLength - 1) / 2;
                    if(conf.currentPage <= offset){
                        // 左边没有...
                        for(var j = 1; j <= offset + 1; j++){
                            scope.pageList.push(j);
                        }
                        scope.pageList.push('···');
                        scope.pageList.push(conf.numberOfPages);
                    }else if(conf.currentPage > conf.numberOfPages - offset){
                        scope.pageList.push(1);
                        scope.pageList.push('···');
                        for(var t = offset + 1; t >= 1; t--){
                            scope.pageList.push(conf.numberOfPages - t);
                        }
                        scope.pageList.push(conf.numberOfPages);
                    }else{
                        // 最后一种情况，两边都有...
                        scope.pageList.push(1);
                        scope.pageList.push('···');

                        for(var h = Math.ceil(offset / 2) ; h >= 1; h--){
                            scope.pageList.push(conf.currentPage - h);
                        }
                        scope.pageList.push(conf.currentPage);
                        for(var f = 1; f <= offset / 2; f++){
                            scope.pageList.push(conf.currentPage + f);
                        }
                        scope.pageList.push('···');
                        scope.pageList.push(conf.numberOfPages);
                    }
                }
                scope.$parent.conf = conf;
            }
            getPagination();
            // prevPage
            scope.prevPage = function() {
                if(conf.currentPage > 1){
                    conf.currentPage -= 1;
                }
                getPagination();
                $state.go('.',{page: conf.currentPage});
            };
            // nextPage
            scope.nextPage = function() {
                if(conf.currentPage < conf.numberOfPages){
                    conf.currentPage += 1;
                }
                getPagination();
                $state.go('.',{page: conf.currentPage});
            };
            // 首页
            scope.firstPage = function() {
                conf.currentPage = 1;
                getPagination();
                $state.go('.',{page: conf.currentPage});
            };
            // 末页
            scope.lastPage = function() {
                conf.currentPage = conf.numberOfPages;
                getPagination();
                $state.go('.',{page: conf.currentPage});
            };
            // 变更当前页
            scope.changeCurrentPage = function(item) {
                if(item === '···'){
                    return;
                }else{
                    conf.currentPage = item;
                    getPagination();
                    $state.go('.',{page: conf.currentPage});
                }
            };
            // 修改每页展示的条数
            //  scope.changeItemsPerPage = function() {
            //  // 一旦展示条数变更，当前页将重置为1
            //  conf.currentPage = 1;
            //  getPagination();
            //  $state.params.size = scope.conf.itemsPerPage;
            //  scope.size = $state.params.size;
            //  $state.params.page = conf.currentPage;
            //  scope.page = $state.params.page;
            //  $state.go('.',{page:scope.page, size:scope.conf.itemsPerPage});
            //  };
            // 跳转页
            scope.jumpToPage = function() {
                num = scope.jumpPageNum;
                if(num) {
                    num = parseInt(num, 10);
                    if(num && num !== conf.currentPage) {
                        if(num > conf.numberOfPages) {
                            num = conf.numberOfPages;
                        }
                        // 跳转
                        conf.currentPage = num;
                        getPagination();
                        scope.jumpPageNum = '';
                        $state.go('.',{page: conf.currentPage, size: scope.conf.itemsPerPage});

                    }
                }
                else if(!num && scope.conf.itemsPerPage !== $state.params.size) {
                    conf.currentPage = 1;
                    getPagination();
                    $state.go('.',{page: conf.currentPage, size: scope.conf.itemsPerPage});
                }
            };
            scope.$watch('conf.totalItems', function() {
                getPagination();
            });
        }
    }
});