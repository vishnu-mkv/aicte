const express = require("express");
const router = express.Router();
const PressRelease = require('../../data/models/press-release');

router.get('/', function(req,res)
{
    let pageNumber = 1;
    if(req.query.page) pageNumber = req.query.page;
    PressRelease.paginate({}, {page: pageNumber,limit: 10, sort:'-date'})
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;