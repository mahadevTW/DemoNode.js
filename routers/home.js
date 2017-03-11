const express = require('express');
let router = express.Router();
const log = require('../app/index').log;
// const mongoose = require('../app/index').mongoose;

router.get('/', function (req, res) {
    res.send('Hello World!');
    log.info("request on / route..");
});

module.exports = router;