const express = require('express');
var route = express.Router();

route.put('/:id', (req, res) => {
    console.log('收到请求体', req.body);
    console.log('收到修改请求参数ID', req.params.id);
    res.send(); //默认响应码为 200
});

module.exports = route;