const express = require('express');
const router = express.Router();

// /overview
router.get('/overview', function(req, res) {
    res.render('./about/overview.pug');
});

// /history
router.get('/history', function(req, res) {
    res.render('./about/history.pug');
});

module.exports = router;