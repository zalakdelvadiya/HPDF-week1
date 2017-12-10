var express = require('express');
var router = express.Router();
var ad = require('../data1.json');
var pd = require('../data2.json');


/* GET count page. */
router.get('/', function(req, res, next) {
    res.render('count', {data1: ad, data2: pd});
});

module.exports = router;
