const express = require('express');
const router = express.Router();

// /overview
router.get('/overview', function(req, res) {
    res.render('./about/overview.pug');
});

module.exports = router;