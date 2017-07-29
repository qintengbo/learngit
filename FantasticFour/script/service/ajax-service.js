/**
 * Created by qintengbo on 2017/6/24.
 */

'use strict';
app.factory("httpService", ['$http', 'path', function($http, path) {
    return {
        // 获取bannerList发送
        getBannerList: function(type) {
            return $http.get(path.bannerList_url(type));
        },
        // 职位搜索
        getSearchJob: function(type, data) {
            return $http.get(path.searchJob_url(type), {params: data});
        },
        // 找职位侧边栏
        getJobType: function() {
            return $http.get(path.jobList_url());
        },
        // 获取公司信息
        getCompanyList: function(type, data) {
            return $http.get(path.companyList_url(type), {params: data});
        },
        // 获取公司详情
        getCompanyDetils: function(id) {
            return $http.get(path.companyDetails_url(id));
        },
        // 获取职位详情
        getJobDetails: function(id) {
            return $http.get(path.jobDetails_url(id));
        }
    }
}]);