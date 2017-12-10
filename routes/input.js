var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

router.get('/', function(req, res, next) {
    res.sendFile('input.html', {root : __dirname});
});

router.post('/', function(req, res, next) {
    res.end("Your name:" + req.body.firstName );
});

module.exports = router;
