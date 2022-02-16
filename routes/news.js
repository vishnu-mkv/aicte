const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./news/news');
});

router.get('/press-releases', (req, res) => {
    res.render('./news/press-release');
});

module.exports = router;