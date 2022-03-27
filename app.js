var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require("helmet")
const { auth } = require('express-openid-connect');
var indexRouter = require('./routes/index');

require('dotenv').config();
var app = express();

app.use(helmet.contentSecurityPolicy({
  useDefaults: false,
  directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://aicte-bot.live", "https://cdnjs.cloudflare.com", "https://code.jquery.com", "http://localhost:35729"],
      connectSrc: ["'self'", "ws://localhost:35729", "https://some.other.domain.com"],
      styleSrc: ["'self'", "fonts.googleapis.com", "'unsafe-inline'", "https://aicte-bot.live"],
      fontSrc: ["'self'", "fonts.gstatic.com"],
      imgSrc: ["'self'", "https://avatars.githubusercontent.com", "https://www.aicte-india.org", "data:", "https://lh3.googleusercontent.com"],
      frameSrc: ["'self'", "https://aicte-bot.live", "https://www.youtube.com"]
  }
}));
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// momentjs
app.locals.moment = require('moment');
app.locals.s3 = process.env.S3_URL;

if(process.env.NODE_ENV !== "production") {

  var livereload = require("livereload");
  var connectLiveReload = require("connect-livereload");
  
  // live reload browser
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, 'public'));
  
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 1000);
  });
  
  app.use(connectLiveReload());

  app.locals.s3 = '';
} 

// local
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const config = {
  authRequired: false,
  auth0Logout: true,  
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

app.use(auth(config));

// /
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
