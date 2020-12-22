const express = require('express');
var route = express.Router();

route.post('/aaa', (req, res) => {
    console.log('收到新增请求的请求体', req.body);
    res.status(201).send({ 'fff': 23452345342 });
});

module.exports = route;