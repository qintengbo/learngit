/**
 * Created by qintengbo on 2017/6/24.
 */

'use strict';
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/homePage");
    $stateProvider
        // 导航栏和页脚
        .state("pageTab",{
            url: "",
            templateUrl: "views/pageTab.html",
            abstract: true,
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/pageTab.css', 'script/controller/pageTab.js'], {serie: true});
                }]
            }
        })
        // 首页
        .state("pageTab.homePage", {
            url: "/homePage",
            templateUrl: "views/homePage.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/homePage.css', 'script/controller/homePage.js'], {serie: true});
                }]
            }
        })
        // 找职位
        .state("pageTab.findJob", {
            url: "/findJob",
            templateUrl: "views/findJob.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/findJob.css', 'script/controller/findJob.js'], {serie: true});
                }]
            }
        })
        // 找精英
        .state("pageTab.findElite", {
            url: "/findElite",
            templateUrl: "views/findElite.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/findElite.css', 'script/controller/findElite.js'], {serie: true});
                }]
            }
        })
        // 推荐、最新职位
        .state("pageTab.searchJob", {
            url: "/searchJob?judgeItem&jp&page&size&name",
            templateUrl: "views/searchJob.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/searchJob.css', 'script/controller/searchJob.js'], {serie: true});
                }]
            }
        })
        // 搜索页顶部切换栏
        .state("pageTab.searchToggle", {
            url: "/searchToggle",
            templateUrl: "views/searchToggle.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/searchToggle.css'], {serie: true});
                }]
            }
        })
        // 职位搜索
        .state("pageTab.searchToggle.searchJobList", {
            url: "/searchJobList?jp&page&size&name&type&subType",
            templateUrl: "views/searchJobList.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/searchJobList.css', 'script/controller/searchJobList.js'], {serie: true});
                }]
            }
        })
        // 搜索公司
        .state("pageTab.searchToggle.searchCompany", {
            url: "/searchCompany?jp&page&size&name",
            templateUrl: "views/searchCompany.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/searchCompany.css', 'script/controller/searchCompany.js'], {serie: true});
                }]
            }
        })
        // 职位详情
        .state("pageTab.jobDescription", {
            url: "/jobDescription?id",
            templateUrl: "views/jobDescription.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/jobDescription.css', 'script/controller/jobDescription.js'], {serie: true});
                }]
            }
        })
        // 公司列表
        .state("pageTab.companyList", {
            url: "/companyList?jp&page&size",
            templateUrl: "views/companyList.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/companyList.css', 'script/controller/companyList.js'], {serie: true});
                }]
            }
        })
        // 公司详情
        .state("pageTab.companyDetails", {
            url: "/companyDetails",
            templateUrl: "views/companyDetails.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/companyDetails.css', 'script/controller/companyDetails.js'], {serie: true});
                }]
            }
        })
        // 公司介绍
        .state("pageTab.companyDetails.companyInfo", {
            url: "/companyInfo?id",
            templateUrl: "views/companyInfo.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/companyInfo.css', 'script/controller/companyDetails.js'], {serie: true});
                }]
            }
        })
        // 在招职位
        .state("pageTab.companyDetails.biddingJob", {
            url: "/biddingJob?id",
            templateUrl: "views/biddingJob.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/biddingJob.css', 'script/controller/biddingJob.js'], {serie: true});
                }]
            }
        })
        // 关于我们
        .state("pageTab.aboutUs", {
            url: "/aboutUs?status",
            templateUrl: "views/aboutUs.html",
            resolve: {
                loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['style/page/aboutUs.css', 'script/controller/aboutUs.js'], {serie: true});
                }]
            }
        })
});