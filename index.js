'use strict';

var webServer = require('./lib/webServer');
var ws = webServer.build();

ws.get('/', function (reqHTTP, resHTTP) {
    var params = {};
    params.dttm = new Date();
    resHTTP.render('jobs', params);
});