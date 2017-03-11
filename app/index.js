const express = require('express');
const fs = require('fs');
const Log = require('log');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const readConfig = require('read-config'),
    config = readConfig('config/server.json');

const router = require('../routers/home');

const studentRouter = require('../routers/student');

const log = new Log('info',fs.createWriteStream(config["LOG_DIR"],{flags:"a"}));

app.use(router);
app.use(studentRouter);

const db = mongoose.connection;

db.on('error',(error)=>{
    log.info("could not conect to DB", error);
});

db.once('open', function() {
    log.info("Connected to DB");
});

app.listen(config["PORT"], function () {
    console.log('Example studentRouter listening on port 3000!')
});

module.exports = {
    mongoose : mongoose,
     log : log,
};