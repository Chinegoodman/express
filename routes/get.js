const express = require("express");
var router = express.Router();

// var Mock = require('mockjs')

router.get("/", (req, res) => res.send("Hello World!"));

// 获取签到页面初始化数据 初始版本
let resdata0 = {
    top: {},
    center: [{
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
        {
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
        {
            status: 0,
        },
        {
            status: 1,
        },
    ],
    bottom: [{
            title: "任务名称1",
            img: "任务图片地址url",
            reward: "奖励内容",
            targetType: 1, //任务类型： 1直接跳转到目的页面；2 跳转H5页面
            target: "去完任务的路径指令",
        },
        {
            title: "任务名称2",
            img: "任务图片地址url2",
            reward: "奖励内容2",
            targetType: 1, //任务类型： 1直接跳转到目的页面；2 跳转H5页面
            target: "去完任务的路径指令2",
        },
    ],
};
let resdone0 = {
    code: 1,
    data: resdata0,
};
router.get("/v1/marketing/sign/detail0", (req, res) => {
    // console.log(req)
    console.log(
        "======================req.query======================================="
    );
    console.log(req.query);
    console.log(
        "========================req.body====================================="
    );
    console.log(req.body);
    res.send(resdone0);
});

// 获取签到页面初始化数据 更新版本
let resdata30 = {
    keeps: 1,
    signs: {
        20200126: 1,
        20200127: 1,
        20200128: 1,
        20200129: 1,
        20200130: 1,
        20200109: 1,
        20200110: 1,
        20200111: 1,
        20200112: 1,
        20200113: 1,
        20200114: 0,
        20200115: 1,
        20200116: 1,
        20200101: 1,
        20200102: 1,
        20200103: 1,
        20200104: 0,
        20200105: 1,
        20200106: 1,
        20200107: 1,
        20200108: 0,
        20200117: 1,
        20200118: 0,
        20200119: 1,
        20200120: 1,
        20200121: 1,
        20200122: 1,
        20200123: 1,
        20200124: 0,
        20200125: 1,
    },
};
let resdata31 = {
    keeps: 1,
    signs: {
        20200131: 1,
        20200126: 1,
        20200127: 1,
        20200128: 1,
        20200129: 1,
        20200130: 1,
        20200109: 1,
        20200110: 1,
        20200111: 1,
        20200112: 1,
        20200113: 1,
        20200114: 0,
        20200115: 1,
        20200116: 1,
        20200101: 1,
        20200102: 1,
        20200103: 1,
        20200104: 0,
        20200105: 1,
        20200106: 1,
        20200107: 1,
        20200108: 0,
        20200117: 1,
        20200118: 0,
        20200119: 1,
        20200120: 1,
        20200121: 1,
        20200122: 1,
        20200123: 1,
        20200124: 0,
        20200125: 1,
    },
};
let resdata29 = {
    keeps: 1,
    signs: {
        20200126: 1,
        20200127: 1,
        20200128: 1,
        20200129: 1,
        20200109: 1,
        20200110: 1,
        20200111: 1,
        20200112: 1,
        20200113: 1,
        20200114: 0,
        20200115: 1,
        20200116: 1,
        20200101: 1,
        20200102: 1,
        20200103: 1,
        20200104: 0,
        20200105: 1,
        20200106: 1,
        20200107: 1,
        20200108: 0,
        20200117: 1,
        20200118: 0,
        20200119: 1,
        20200120: 1,
        20200121: 1,
        20200122: 1,
        20200123: 1,
        20200124: 0,
        20200125: 1,
    },
};
let resdata28 = {
    keeps: 1,
    signs: {
        20200126: 1,
        20200127: 1,
        20200128: 1,
        20200109: 1,
        20200110: 1,
        20200111: 1,
        20200112: 1,
        20200113: 1,
        20200114: 0,
        20200115: 1,
        20200116: 1,
        20200101: 1,
        20200102: 1,
        20200103: 1,
        20200104: 0,
        20200105: 1,
        20200106: 1,
        20200107: 1,
        20200108: 0,
        20200117: 1,
        20200118: 0,
        20200119: 1,
        20200120: 1,
        20200121: 1,
        20200122: 1,
        20200123: 1,
        20200124: 0,
        20200125: 1,
    },
};
let resdone = {
    code: 1,
    // data: resdata30
    data: "",
};
// 获取签到数据
router.get("/v1/marketing/sign/detail", (req, res) => {
    // console.log(req)
    console.log(
        "======================req.query======================================="
    );
    console.log(req.query);
    console.log(req.query.month.toString().substring(4));
    let month = req.query.month.toString().substring(4);
    if (
        month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 8 ||
        month == 10 ||
        month == 12
    ) {
        resdone.data = resdata31;

        console.log(
            "========================req.body====================================="
        );
        console.log(req.body);
        res.send(resdone);
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        resdone.data = resdata30;

        console.log(
            "========================req.body====================================="
        );
        console.log(req.body);
        res.send(resdone);
    } else {
        resdone.data = resdata29;

        console.log(
            "========================req.body====================================="
        );
        console.log(req.body);
        res.send(resdone);
    }
});
// 获取签到任务相关数据
router.get("/v1/marketing/task/list", (req, res) => {
    // console.log(req)
    console.log(
        "======================req.query======================================="
    );
    console.log(req.query);

    resdone.data = {
        tasks: [{
            id: 5,
            title: "ddd",
            image: "http://aaabbbbcccc.com",
            icon: "http://aaabbbbcccc.com",
            type: 1,
            isRepeat: null,
            term: [{
                    termId: 6,
                    type: 2,
                    count: 1,
                    unit: 1,
                    recordState: 1,
                },
                {
                    termId: 7,
                    type: 1,
                    count: 3,
                    unit: 1,
                    recordState: 1,
                },
                {
                    termId: 9,
                    type: 2,
                    count: 5,
                    unit: 1,
                    recordState: 0,
                },
                {
                    termId: 10,
                    type: 2,
                    count: 7,
                    unit: 1,
                    recordState: 0,
                }, {
                    termId: 6,
                    type: 2,
                    count: 9,
                    unit: 1,
                    recordState: 0,
                },
                {
                    termId: 7,
                    type: 1,
                    count: 11,
                    unit: 1,
                    recordState: 0,
                },
                {
                    termId: 9,
                    type: 2,
                    count: 16,
                    unit: 1,
                    recordState: 0,
                },
                {
                    termId: 10,
                    type: 2,
                    count: 1,
                    unit: 1,
                    recordState: 0,
                },
            ],
        }, ],
    };

    console.log(
        "========================req.body====================================="
    );
    console.log(req.body);
    res.send(resdone);
});

// mock数据模拟 api
// router.get("/expressapiget", (req, res) => {
//     // console.log(req);
//     console.log(
//         "======================req.query======================================="
//     );
//     console.log(req.query);

//     console.log(
//         "========================req.body====================================="
//     );
//     console.log(req.body);
//     // =====================================================================
//     var data = Mock.mock({
//         // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//         'list|10-101': [{
//             // 属性 id 是一个自增数，起始值为 1，每次增 1
//             'id|+1': 1
//         }]
//     })
//     resdone.data = {
//         // keyname:{
//         //     a:[66,1.2,21,532]
//         // }
//         list: data.list
//     };
//     res.send(resdone);
// });

// mock数据模拟 403  token过期
router.get("/tokenapi", (req, res) => {
    resdone.data = {
        list: [66, 1.2, 21, 532]
    };
    res.setHeader("token", 000052);
    res.status(403).send(resdone);
});
// mock数据模拟 200  token正常
router.get("/tokenapi2", (req, res) => {
    resdone.data = {
        list: [66, 1.2, 21, 532]
    };
    res.setHeader("token", 9527007);
    res.setHeader("Access-Control-Expose-Headers", 'token');
    res.status(200).send(resdone);
});



// const pool = require('./../mysql/pool'); //TODO:链接数据库 获取数据
//pool----query, queryArgs, doReturn
// mysql数据模拟 200
router.get("/localarray", (req, res) => {
    // let list = pool.query('music');
    resdone.data = {
        // list: list
        list: [1, 2, 4]
    };
    res.setHeader("token", 9527007);
    res.setHeader("Access-Control-Expose-Headers", 'token');
    res.status(200).send(resdone);
});

router.get("/html", (req, res) => {
    res.render('index', { 'title': 'Express' });
});


var music = require('./../mysql/handel');


router.get('/queryAll', function(req, res, next) {
    music.queryAll(req, res, next);
});

// 参考网站
// https://www.cnblogs.com/tllw/p/9797015.html

module.exports = router;