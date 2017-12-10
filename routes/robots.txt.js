var express = require('express');
var router = express.Router();
var request = require("request");

/* GET robots.txt page. */

router.get('/', function(req, res, next) {
    request("http://httpbin.org/deny", function(error,response,body) {
        res.end(body);
    });
});

module.exports = router;
