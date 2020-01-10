/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2020/1/10
 * Time: 15:24
 * Desc: node测试服务1
 */
let http = require('http');
http.createServer(function (req, res) {
    res.write('<head><meta charset="utf-8"></head>');
    res.write('node测试服务器1');
    res.end();
}).listen(3000);
