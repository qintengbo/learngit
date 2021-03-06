/**
 * Created by qintengbo on 2017/7/5.
 */

'use strict';
app.factory("logicService", function() {
    return {
        // 最新职位列表拆分
        newJobRule: function(jobListArray) {
            var num = jobListArray.length;
            if(num < 20) {
                var stuffNum = Math.ceil(20 / num);
                var arr = [];
                for(var i = 0; i < stuffNum; i++) {
                    arr = arr.concat(jobListArray);
                }
                arr.length = 20;
                jobListArray = arr;
            }
            var jobArr =[];
            for(var j = 0; j < 5; j++) {
                jobArr[j] = jobListArray.slice(0, 4);
                jobListArray.splice(0, 4);
            }
            return jobArr;
        },
        // 数据判断
        judgeStorage: function(judge, data) {
            var dataCopy = angular.copy(data);
            if(judge === undefined) {
                var option = dataCopy;
            }
            else {
                option = JSON.parse(judge);
            }
            return option;
        },
        // 判断需要展开详情的类目
        judgeShowCategoryDetail: function (data) {
            for (var j = 0; j < 12; j++) {
                if (data[j].choose === true) {
                    return j;
                }
            }
        },
        // 分享功能
        shareFn: function (type, url, companyName, title, picurl) {
            switch (type) {
                case "sqq":
                    window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&title=' + companyName + '&showcount=0&desc=&summary=' + title + '&pics=' + picurl, 'newwindow');
                    break;
                case "tsina":
                    window.open('http://v.t.sina.com.cn/share/share.php?title=萝卜多-知根知底的社群招聘  ' + companyName + ' 在招职位：' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl, 'newwindow');
                    break;
            }
        },
        //跳转界面位置
        scrollTo: function (x, y) {
            window.scrollTo(x, y);
        },
        // 判断选中的数量
        selectedNum: function (data) {
            var i = 0;
            data.forEach(function (item) {
                if (item.choose === true) {
                    i++;
                }
            });
            return i;
        },
        // 拆分字符串
        sprSplit: function(data) {
            if (data.length > 0) {
                data.forEach(function (item) {
                    item.companyTags = item.companyTags.split(",");
                    item.companyTags = item.companyTags.slice(0, 3);
                });
            }
        }
    }
});

app.factory("searchUtil", function() {
    return {
        // 标签多选
        checkboxMulti: function (ind, arr) {
            if (ind === 0) {
                arr.forEach(function (item) {
                    item.choose = false
                });
                arr[0].choose = true
            } else {
                arr[ind].choose = !arr[ind].choose;
                arr[0].choose = false;
                if (arr.every(function (item) {
                        return item.choose === false
                    })) {
                    arr[0].choose = !arr[0].choose;
                }
            }
        },
        //搜索单选
        radioType: function (ind, arr) {
            arr[ind].choose = !arr[ind].choose;
            arr.forEach(function (item, index) {
                if (index !== ind) {
                    item.choose = false
                }
                else if (arr.every(function (item) {
                        return item.choose === false
                    })) {
                    arr[0].choose = true;
                }
            })
        },
        //数据转数组
        dataConvert: function (data) {
            //转换为字符串
            var dataObj = {};
            var dataName;
            for (dataName in data) {
                dataObj[dataName] = data[dataName].filter(function (item, index) {
                    return item.choose === true
                });
                dataObj[dataName] = dataObj[dataName].map(function (item) {
                    return item.type
                });
                dataObj[dataName] = dataObj[dataName].toString()
            }
            return dataObj;
        }
    }
});