var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.cookie('name' , 'Zalak');
    res.cookie('age', '19');
    res.render('setcookie', { title: 'Cookie Set' });
    res.end();
});

module.exports = router;
