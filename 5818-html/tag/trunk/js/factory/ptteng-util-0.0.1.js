'use strict';
angular.module('admin')
    
    
    .factory('commonUtil', function ($rootScope, $state) {
        return {
            pageDefault: {page: 1, size: 10, next: true},

            //搜索
            search: function (param) {
                $state.go($state.current, param, {reload: true})
            },

            //清除
            clean: function (param) {
                angular.forEach(param, function (data, index) {
                    param[index] = '';
                });
                console.log(param);

                return param
            },


            //是否全选
            isAllChoice:function(arr){
                var isAll=true;
                angular.forEach(arr,function(data){
                    if(!data.choice)
                    {
                        isAll=false
                    }
                })
                return isAll
            },


            //全选
            allChoice:function(arr){
                  angular.forEach(arr,function(data,index){
                    if(!data.choice){
                        arr[index].choice=true;
                    }
                  })
                return arr
            },

            //取消全选
            cancelAllChoice:function(arr){
                    angular.forEach(arr,function(data,index){
                        if(data.choice){
                            arr[index].choice=false;
                        }
                    })
                return arr
            },

            //应用全选
            allList:function(arr,btn){
                  var isAll=this.isAllChoice(arr);
                if(isAll){
                    arr=this.cancelAllChoice(arr)
                }
                else{
                    arr=this.allChoice(arr)
                }
                return arr
            },

            //点击单个的时候
            //onlyClick:function(arr,btn){
            //    var isAll=this.isAllChoice(arr);
            //        if(isAll){
            //            btn=true
            //        }
            //        else{
            //            btn=false
            //        }
            //
            //    return btn
            //
            //},

            //时间戳处理
            querySearchParams: function(params){    
                for (var k in params){
                    if(params[k] instanceof Date){
                        params[k] = new Date(params[k]).getTime();
                    }
                    // 处理 结束时间 那天末尾
                    if(k.toLowerCase().indexOf('end') != -1 && params[k]){
                        var timeString = String(params[k]);
                        var str = timeString.substring(timeString.length - 1, timeString.length);
                        if(str != '9'){
                            params[k] = params[k] + 86400000 - 1;
                        }
                    }
                    if( k === 'page') {
                        params[k] = 1;
                    }
                }
                return params;
            },


            process4Page: function (params) {
                if (params == undefined) {
                    params = {};
                } else {

                }
                if (params.page == undefined) {
                    params.page = $state.params.page || this.pageDefault.page;
                }
                if (params.size == undefined) {
                    params.size = $state.params.size || this.pageDefault.size;
                }
                if (params.next == undefined) {
                    params.next = $state.params.next || this.pageDefault.true;
                }
                return {"params": params};
            },

            processPageResult: function (res) {
                $state.params.next = res.data.data.next;
                return res;
            },

            setPage: function (res) {
                this.page = {current: res.data.data.page, size: res.data.data.size, next: res.data.data.next}
            },

            resetPage: function () {
                this.page = {current: 1, size: 5, next: true}
            },

            page: {current: 1, size: 5, next: true},
            concactArrayParam: function (name, params) {
                var tempUrls = "?";
                angular.forEach(params, function (data, index, array) {
                    tempUrls = tempUrls + name + "=" + data + "&";
                });
                var url = tempUrls.substring(0, tempUrls.length - 1);
                return url;
            },

            showErrMsg: function (res) {
                if (res.data.code == -5020) {
                    $rootScope.alert(res.data.message, function () {
                        console.log(res.data.code + " get error  message is " + res.data.message);
                        $state.go("login", {}, {reload: true});
                    });
                } else {
                    $rootScope.alert(res.data.message, function () {
                        console.log(res.data.code + " get error  message is " + res.data.message);
                    });
                }


            },

            showReturnMsg: function (res, path) {
                switch (res.data.code) {
                    case 0:
                        $rootScope.alert(res.data.message, function () {
                            console.log(res.data.code + " get error  message is " + res.data.message);
                            if (path == undefined) {

                            } else {
                                $state.go(path, {}, {reload: true});
                            }
                        });
                        break;
                    case -5020:
                        $rootScope.alert(res.data.message, function () {
                            console.log(res.data.code + " get error  message is " + res.data.message);
                            $state.go("login", {}, {reload: true});
                        });
                        break;
                    default :
                        $rootScope.alert(res.data.message, function () {
                            console.log(res.data.code + " get error  message is " + res.data.message);
                        });
                }

            },
            isUpdate: function (id) {
                if (id == undefined) {
                    return false;
                } else {
                    return true;
                }
            },

            // 处理模块列表数据，将map添加进list结果
            buildTree: function (modules) {
                var tree = [];
                return this.buildTreeNode(0, null, tree, modules);
            },

            buildTreeNode: function (pid, node, tree, modules) {
                var now = this;
                angular.forEach(modules, function (data, index, array) {
                    var module = data;
                    if (module.parentID == pid) {
                        tree = now.buildTreeNode(module.id, module, tree, modules);
                        if (pid == 0) {
                            tree.push(module);
                        } else {
                            if (node.nodes == undefined) {
                                node.nodes = [];
                            }
                            node.nodes.push(module);
                        }
                    }
                });
                tree = tree.sort(now.treeSort);
                angular.forEach(tree, function (item, index) {
                    if (item.nodes) {
                        item.nodes = item.nodes.sort(now.treeSort);
                    }
                });
                return tree;
            },

            treeSort: function (a, b) {
                if (a.level < b.level)
                    return -1;
                else if (a.level > b.level)
                    return 1;
                else
                    return 0;
            },

            arrayContains: function (array, obj) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i] === obj) {
                        return true;
                    }
                }
                return false;
            }
        }
    })

    .factory("datePickerUtils", ["$filter", function ($filter) {
        return {
            isDate: function (obj) {
                return Object.prototype.toString.call(obj) === "[object Date]";
            },

            buildDates: function (date, options) {
                var dates = [],
                    lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 3);

                options = options || {};
                date = new Date(date);

                while (date.getDay() !== options.weekStartsOn) {
                    date.setDate(date.getDate() - 1);
                }

                for (var i = 0; i < 42; i++) { // 42 == 6 rows of dates
                    if (options.noExtraRows && date.getDay() === options.weekStartsOn && date > lastDate) break;

                    dates.push(new Date(date));
                    date.setDate(date.getDate() + 1);
                }

                return dates;
            },

            buildDayNames: function (weekStartsOn) {
                var dayNames = ['日', '一', '二', '三', '四', '五', '六'];

                if (weekStartsOn) {
                    dayNames = dayNames.slice(0);
                    for (var i = 0; i < weekStartsOn; i++) {
                        dayNames.push(dayNames.shift());
                    }
                }
                return dayNames;
            },

            monthCourse: function (start, end) {
                var months = [];
                start = new Date(start);
                end = new Date(end);
                var differ = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
                for (var i = 0; i < differ; i++) {
                    var newMonth = new Date(start.getFullYear(), start.getMonth() + i, 1);
                    months.push($filter('date')(newMonth, 'yyyy-MM'));
                }
                return months;
            },

            getMonthDate: function (year, month) {
                return new Date(year, month + 1, 0).getDate();
            },

            getDateByTime: function (date, time) {
                var year = new Date(date).getFullYear();
                var month = new Date(date).getMonth();
                var day = new Date(date).getDate();
                var hours = new Date(time).getHours();
                var minutes = new Date(time).getMinutes();

                if (!date || !time) {
                    return "";
                } else {
                    return new Date(year, month, day, hours, minutes).getTime();
                }
            }
        };
    }])
;


