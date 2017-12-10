var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.write('<h1>' + "From cookies" + '</h1>');
    res.write('<br>' + "Your name:" + req.cookies.name);
    res.end('<br>' + "Your age:" + req.cookies.age);
});

module.exports = router;
