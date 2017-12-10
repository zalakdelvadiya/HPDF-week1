var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET image page. */
router.get('/', function(req, res) {

    fs.readFile('./public/images/1.jpg', function(err,content){
        if(err){
            res.writeHead(400,{'content-type':'text/html'})
                    res.end("No images");
        }
        else {
                res.writeHead(200, {'content-type':'image/jpg'})
                        res.end(content);
            }
            });
        });


module.exports = router;