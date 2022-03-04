const express = require('express');
const router = express.Router();

// /overview
router.get('/overview', function(req, res) {
    res.render('./about/overview.pug');
});
router.get('/leadership-team', (req, res) => {
    res.render('./about/about-leadershipteam');
});


module.exports = router;