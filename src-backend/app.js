var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var ndfRouter = require('./routes/ndf');
var userRouter = require('./routes/utilisateur');
var gestRouter = require('./routes/gestionnaire');
var searchRouter = require('./routes/search');

var mongoose = require('mongoose');

var app = express();
var messageRouter = require('./routes/messages')(app);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use(logger('dev'));
app.use(express.json({limit: '100Mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gest',gestRouter)
app.use('/ndf',ndfRouter)
app.use('/user', userRouter);
app.use('/message', messageRouter);
app.use('/search',searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
