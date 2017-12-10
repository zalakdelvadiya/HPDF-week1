var express = require('express');
var router = express.Router();

/* GET authors page. */
router.get('/', function(req, res, next) {
    res.render('authors', {title: 'Authors'});
});

module.exports = router;
