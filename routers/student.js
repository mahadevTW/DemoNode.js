var express = require('express')
var studentRouter = express.Router()

studentRouter.get('/students', function (req, res) {
    res.send('Listing All Students');
});

module.exports = studentRouter;
