var express = require('express');
var router = express.Router();

const aboutRouter = require('./about');
const newsRouter = require('./news');
const bureausRouter = require('./bureaus');
const initiativesRouter = require('./initiatives');
const schemesRouter = require('./schemes');
const educationRouter = require('./education');
const opportunitiesRouter = require('./opportunities');
const bulletinsRouter = require('./bulletins');
const apiRouter = require('./api/api');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.use('/about', aboutRouter);
router.use('/api', apiRouter);
router.use('/news', newsRouter);
router.use('/bureaus', bureausRouter);
router.use('/initiatives', initiativesRouter);
router.use('/schemes', schemesRouter);
router.use('/education', educationRouter);
router.use('/opportunities', opportunitiesRouter);
router.use('/bulletins', bulletinsRouter);

module.exports = router;
