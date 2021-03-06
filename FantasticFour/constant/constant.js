/**
 * Created by qintengbo on 2017/7/3.
 */

'use strict';
// 找职位一级分类
app.constant("jobType", [
    {type: 1, name: "用户体验"},
    {type: 2, name: "研发"},
    {type: 3, name: "大数据"}
]);
// 找职位二级分类
app.constant("secondType", [
    {type: 1, name: "产品"},
    {type: 2, name: "UI"},
    {type: 3, name: "QA"},
    {type: 4, name: "Android"},
    {type: 5, name: "IOS"},
    {type: 6, name: "WEB"},
    {type: 7, name: "OP"},
    {type: 8, name: "JAVA"},
    {type: 9, name: "NLP"},
    {type: 10, name: "DM"},
    {type: 11, name: "DL"}
]);
// 搜索面板
app.constant("searchPanel", {
    city: [
        {name: "不限", choose: true},
        {type: 1, name: "北京", choose: false}
    ],
    category: [
        {name: "不限", choose: true},
        {type: 1, name: "产品", choose: false},
        {type: 2, name: "UI", choose: false},
        {type: 3, name: "QA", choose: false},
        {type: 4, name: "Android", choose: false},
        {type: 5, name: "IOS", choose: false},
        {type: 6, name: "WEB", choose: false},
        {type: 7, name: "OP", choose: false},
        {type: 8, name: "JAVA", choose: false},
        {type: 9, name: "NLP", choose: false},
        {type: 10, name: "DM", choose: false},
        {type: 11, name: "DL", choose: false}
    ],
    subCategory: [
        {
            name: "产品",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "助理", choose: false},
                {type: 2, name: "初级", choose: false},
                {type: 3, name: "中级", choose: false},
                {type: 4, name: "高级", choose: false},
                {type: 5, name: "总监", choose: false}
            ]
        },
        {
            name: "UI",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false},
                {type: 4, name: "总监", choose: false}
            ]
        },
        {
            name: "QA",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "Android",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "IOS",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "WEB",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "OP",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "JAVA",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false},
                {type: 4, name: "总监", choose: false}
            ]
        },
        {
            name: "NLP",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "DM",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        },
        {
            name: "DL",
            data: [
                {name: "不限", choose: true},
                {type: 1, name: "初级", choose: false},
                {type: 2, name: "中级", choose: false},
                {type: 3, name: "高级", choose: false}
            ]
        }
    ],
    industry: [
        {name: "不限", choose: true},
        {type: 0, name: "移动互联网", choose: false},
        {type: 1, name: "电子商务", choose: false},
        {type: 2, name: "企业服务", choose: false},
        {type: 3, name: "O2O", choose: false},
        {type: 4, name: "教育", choose: false},
        {type: 5, name: "金融", choose: false},
        {type: 6, name: "游戏", choose: false}
    ],
    education: [
        {name: "不限", choose: true},
        {type: 0, name: "大专", choose: false},
        {type: 1, name: "本科", choose: false},
        {type: 2, name: "硕士", choose: false},
        {type: 3, name: "博士及以上", choose: false}
    ],
    experience: [
        {name: "不限", choose: true},
        {type: 0, name: "应届", choose: false},
        {type: 1, name: "1-2年", choose: false},
        {type: 2, name: "3-5年", choose: false},
        {type: 3, name: "6-9年", choose: false},
        {type: 4, name: "10年及以上", choose: false}
    ],
    compensation: [
        {name: "不限", choose: true},
        {type: 0, name: "8K以下", choose: false},
        {type: 1, name: "8-15K", choose: false},
        {type: 2, name: "16-25K", choose: false},
        {type: 3, name: "26K及以上", choose: false}
    ],
    publishAt: [
        {name: "不限", choose: true},
        {type: 0, name: "24h内", choose: false},
        {type: 1, name: "三天内", choose: false},
        {type: 2, name: "七天内", choose: false}
    ],
    financing: [
        {name: "不限", choose: true},
        {type: 0, name: "天使轮", choose: false},
        {type: 1, name: "A轮", choose: false},
        {type: 2, name: "B轮", choose: false},
        {type: 3, name: "C轮", choose: false},
        {type: 4, name: "D轮及以上", choose: false},
        {type: 5, name: "上市公司", choose: false},
        {type: 6, name: "无需融资", choose: false}
    ]
});
// 独立过滤器
// 公司行业
app.constant("industryType", [
    {type: 0, name: "移动互联网"},
    {type: 1, name: "电子商务"},
    {type: 2, name: "企业服务"},
    {type: 3, name: "O2O"},
    {type: 4, name: "教育"},
    {type: 5, name: "金融"},
    {type: 6, name: "游戏"}
]);
// 学历要求
app.constant("educationType", [
    {type: 0, name: "大专"},
    {type: 1, name: "本科"},
    {type: 2, name: "硕士"},
    {type: 3, name: "博士及以上"}
]);
// 工作经验
app.constant("experienceType", [
    {type: 0, name: "应届"},
    {type: 1, name: "1-2年"},
    {type: 2, name: "3-5年"},
    {type: 3, name: "6-9年"},
    {type: 4, name: "10年及以上"}
]);
// 薪资
app.constant("compensationType", [
    {type: 0, name: "8K以下"},
    {type: 1, name: "8-15K"},
    {type: 2, name: "16-25K"},
    {type: 3, name: "26K及以上"}
]);
// 融资规模
app.constant("financingType", [
    {type: 0, name: "天使轮"},
    {type: 1, name: "A轮"},
    {type: 2, name: "B轮"},
    {type: 3, name: "C轮"},
    {type: 4, name: "D轮及以上"},
    {type: 5, name: "上市公司"},
    {type: 6, name: "无需融资"}
]);
// 发布时间
app.constant("updateAtType", [
    {type: 0, name: "今天"},
    {type: 1, name: "昨天"}
]);
// 公司规模
app.constant("companyStaffNum", [
    {type: 0, name: "1-20人"},
    {type: 1, name: "20-50人"},
    {type: 2, name: "50-200人"},
    {type: 3, name: "200-1000人"},
    {type: 4, name: "1000-5000人"},
    {type: 5, name: "5000人以上"}
]);

// 在招职位搜索面板
app.constant("biddingJobPanel", {
    category: [
        {name: "不限", choose: true},
        {type: '1', name: "产品", choose: false},
        {type: '9,10,11', name: "运营", choose: false},
        {type: '4,5,6,7,8', name: "技术", choose: false},
        {type: '2', name: "设计", choose: false},
        {type: '3', name: "测试", choose: false}
    ]
});