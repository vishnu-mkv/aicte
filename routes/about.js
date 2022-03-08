const express = require('express');
const router = express.Router();

// /overview
router.get('/overview', function(req, res) {
    res.render('./about/overview.pug');
});
router.get('/leadership-team', (req, res) => {
    res.render('./about/about-leadershipteam');
});


// /organisation structure
router.get('/organisation-structure', function(req, res) {
    res.render('./about/organisation-structure.pug');
});

// /messages
router.get('/messages', function(req, res) {
    res.render('./about/messages.pug');
});

module.exports = router;