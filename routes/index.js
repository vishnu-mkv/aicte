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
const adminRouter = require('./admin/admin');
const apiRouter = require('./api/api');

router.use('/about', aboutRouter);
router.use('/api', apiRouter);
router.use('/news', newsRouter);
router.use('/bureaus', bureausRouter);
router.use('/initiatives', initiativesRouter);
router.use('/schemes', schemesRouter);
router.use('/education', educationRouter);
router.use('/opportunities', opportunitiesRouter);
router.use('/bulletins', bulletinsRouter);
router.use('/admin', adminRouter)

var bureauesData = [
  {
    name: 'Overview',
    desc: 'An Overview of Bureaus and Cells.',
    url: '/',
    image: '/images/bureus1.jfif'
  },
  {
    name: 'Approval',
    desc: 'As defined in the AICTE act 1987, Technical Education means programmes of Education, Research, and training in Engineering and Technology, Architecture, Town Planning, Management, Pharmacy, and Applied Arts and Crafts, and such other programmes or areas as the Central Government may in consultation with the Council, by notification in the official gazette declare.',
    url: '/',
    image: '/images/bureus2.jfif'
  },
  {
    name: 'Policy & Academic Planning',
    desc: 'Planning and framing of policies related to Academics for strengthening and improving quality of Technical Education',
    url: '/',
    image: '/images/bureus3.jfif'
  },
  {
    name: 'Administration',
    desc: 'Administration consists of the performance or management of business operations and thus the making or implementing of major decisions. Administration can be defined as the universal process of organizing people and resources efficiently so as to direct activities toward common goals and objectives.',
    url: '/',
    image: '/images/bureus4.jfif'
  },
  {
    name: 'Finance',
    desc: 'Finance Bureau has been mandated to manage Finances (Funds) efficiently and effectively in such a manner as to accomplish the objectives of the organization by planning, monitoring, organizing, and controlling of the monetary resources of an organization.',
    url: '/',
    image: '/images/bureus5.jfif'
  }
]

router.get('/', function(req, res, next) {
  res.render('index', {bureauesData});
});

module.exports = router;
