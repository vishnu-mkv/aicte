const express = require('express');
const router = express.Router();
const Announcement = require('../../data/models/announcement.js');

router.get('/', function(req, res)
{   
    Announcement.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;