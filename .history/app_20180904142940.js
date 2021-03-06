const express = require('express');
const fs = require('fs')
const app = express();

//图片文件
app.get('/file/images/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})

//图标文件
app.get('/file/icon/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})

// 引入 mongoose 相关模型
require('./models/like')
require('./models/article')
require('./models/category')
require('./models/user')

// 引入 api 路由
const routes = require('./routes/index')
// api 路由
app.use('/api', routes)

//配置服务端口
const server = app.listen(8082, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})