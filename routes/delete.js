const express = require('express');
var route = express.Router();

route.delete('/:id', (req, res) => {
    console.log('收到请求体', req.body);
    console.log('收到删除请求参数ID', req.params.id);
    res.status(204).send(); //返回的响应码为 204表示已经删除
});

module.exports = route;