'use strict'

// Public libraries

var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var queryString = require('query-string');
var env = require('node-env-file');
var cookieSession = require('cookie-session');

// Parsers

exports.parseJSON = bodyParser.json();
exports.parseRaw = bodyParser.raw();
exports.parseText = bodyParser.text({type:'*/*'});
exports.parseUrlEncoded = bodyParser.urlencoded({ extended: false});
exports.parseFormWithAttachments = multer();

// Build Server

exports.build = function() {
    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/../public'));

//Create web server
var port = proceess.env.PORT || 5000;
http.createServer(app).listen(port);


//Reads configuration from .env, if file does not exist then ignore

try{
    env(__dirname + '/../env');
    console.log("ENV: " + process.env.LOCATION);
} catch (e) {
    console.log("The file 'env' was not found, so no settings were loaded");
}

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

return app;

}