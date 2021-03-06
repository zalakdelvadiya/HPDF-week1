var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var authors = require('./routes/authors');
var post = require('./routes/post');
var count = require('./routes/count');
var setCookie = require('./routes/setcookie');
var getCookie = require('./routes/getcookie');
var robots = require('./routes/robots.txt.js');
var html = require('./routes/html.js');
var image = require('./routes/image.js');
var input = require('./routes/input');



var app = express();

app.locals.data1 = require('./data1.json');
app.locals.data2 = require('./data2.json');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/authors',authors);
app.use('/post',post);
app.use('/count',count);
app.use('/setcookie',setCookie);
app.use('/getcookie',getCookie);
app.use('/robots.txt',robots);
app.use('/html',html);
app.use('/image',image);
app.use('/input',input);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
