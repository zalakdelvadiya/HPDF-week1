var express = require('express');
var router = express.Router();
var path = require('path');

/* GET html page. */
router.get('/', function(req, res, next) {
    res.sendFile('html.html',{root: __dirname});
});

module.exports = router;