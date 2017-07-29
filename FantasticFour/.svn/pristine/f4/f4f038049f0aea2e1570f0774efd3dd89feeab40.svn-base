/**
 * Created by qintengbo on 2017/6/24.
 */

'use strict';
// 主职位分类
app.filter("jobTypeFilter", function(jobType) {
    return function(type) {
        for(var i = 0; i < jobType.length; i++) {
            if(type == jobType[i].type) {
                return jobType[i].name;
            }
        }
    }
});
// 职业分类
app.filter("secondTypeFilter", function(secondType) {
    return function(type) {
        for(var i = 0; i < secondType.length; i++) {
            if(type == secondType[i].type) {
                return secondType[i].name;
            }
        }
    }
});
// 公司行业
app.filter("industryTypeFilter", function(industryType) {
    return function(type) {
        for(var i = 0; i < industryType.length; i++){
            if(type == industryType[i].type) {
                return industryType[i].name;
            }
        }
    }
});
// 学历要求
app.filter("educationTypeFilter", function(educationType) {
    return function(type) {
        for(var i = 0; i < educationType.length; i++) {
            if(type == educationType[i].type) {
                return educationType[i].name;
            }
        }
    }
});
// 工作经验
app.filter("experienceTypeFilter", function(experienceType) {
    return function(type) {
        for(var i = 0; i < experienceType.length; i++) {
            if(type == experienceType[i].type) {
                return experienceType[i].name;
            }
        }
    }
});
// 薪资水平
app.filter("compensationTypeFilter", function(compensationType) {
    return function(type) {
        for(var i = 0; i < compensationType.length; i++) {
            if(type == compensationType[i].type) {
                return compensationType[i].name;
            }
        }
    }
});
// 公司规模
app.filter("companyStaffNumFilter", function(companyStaffNum) {
    return function(type) {
        for(var i =0; i < companyStaffNum.length; i++) {
            if(type == companyStaffNum[i].type) {
                return companyStaffNum[i].name;
            }
        }
    }
});
// 融资规模
app.filter("financingTypeFilter", function(financingType) {
    return function(type) {
        for(var i = 0; i < financingType.length; i++) {
            if(type == financingType[i].type) {
                return financingType[i].name;
            }
        }
    }
});
// 发布时间
app.filter("updateAtFilter", function(updateAtType, $filter) {
    return function (type) {
        var timestamp = new Date().getTime();
        timestamp = $filter('date')(timestamp, 'yyyyMMdd');
        var time = timestamp - $filter('date')(type, 'yyyyMMdd');
        if (time == 0) {
            return updateAtType[0].name + $filter('date')(type, 'HH:mm');
        } else if (time == 1) {
            return updateAtType[1].name + $filter('date')(type, 'HH:mm');
        } else {
            return $filter('date')(type, 'yyyy-MM-dd HH:mm');
        }
    }
});