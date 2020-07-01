const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const upload  = require('multer')();

const apiRouter = require('./routes/api');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(upload.none());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

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




////

let arr = [
  {id: 1, staff_id: 1, student_email: null, date: "07-02-18", time: "06:20"},
  {id: 2, staff_id: 1, student_email: null, date: "07-02-18", time: "06:20"},
  {id: 3, staff_id: 2, student_email: null, date: "07-02-18", time: "06:20"},
  {id: 4, staff_id: 3, student_email: null, date: "07-02-18", time: "06:20"},

]