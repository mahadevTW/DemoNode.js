var express = require('express')
var fs = require('fs')
var Log = require('log')
var app = express()
var readConfig = require('read-config'),
    config = readConfig('config/server.json');

var log = new Log('info',fs.createWriteStream(config["LOG_DIR"],{flags:"a"}));

app.get('/', function (req, res) {
	log.info('Request on /');
    res.send('Hello World!')
})

app.listen(config["PORT"], function () {
  console.log('Example app listening on port 3000!')
})