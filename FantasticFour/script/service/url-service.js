/**
 * Created by qintengbo on 2017/7/4.
 */

'use strict';
app.factory("path", function() {
    return {
        // 获取banner图列表
        bannerList_url: function(type) {
            return "/carrots-ajax-SixGod/a/article/search?type=" + type;
        },
        // 职位搜索
        searchJob_url: function(type) {
            return "/carrots-ajax-SixGod/a/profession/search?type=" + type;
        },
        // 找职位侧边栏
        jobList_url: function() {
            return "constant/jobList.json";
        },
        // 公司列表
        companyList_url: function(type) {
            return "/carrots-ajax-SixGod/a/company/search?approved=" + type;
        },
        // 公司详情
        companyDetails_url: function(id) {
            return "/carrots-ajax-SixGod/a/company/" + id;
        },
        // 职位详情
        jobDetails_url: function(id) {
            return "/carrots-ajax-SixGod/a/profession/" + id;
        }
    }
});