var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/musiclist', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;



// https://blog.csdn.net/weixin_41564885/article/details/80296310?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control