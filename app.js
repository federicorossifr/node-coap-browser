var express = require('express');
var coapApi = require("coap-api");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();
var io = require('socket.io').listen(app.listen(8080,'0.0.0.0',function(){
	console.log("Server running at http://localhost:8080");
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
io.clientCount = 0;
//Expose socket.io object on every request
app.use(function(req,res,next) {
	req.io = io;
	next();
});

io.on("connection",function(socket) {
  	console.log("An user connected, now online: "+ (++io.clientCount));
  	socket.emit("hello");
  	socket.on("disconnect",function() {
  		console.log("An user disconnected, now online: "+ (--io.clientCount));
  	})
    socket.on("observe",function(data) {
      var ts = socket;
      coapApi.observe(data.host,data.endpoint,data.query,d => {
        console.log(d);
        ts.emit('obData',d.payload.toString('utf8'));
      })
    });
 });


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'public')));

//Bower's downloaded components
app.use('/bower_components',express.static(path.join(__dirname, '/bower_components')));

app.use('/', index);

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
