const express = require('express');
const router = express.Router();
const News = require('../data/models/news');
const PressRelease = require('../data/models/press-release');

router.get('/', (req, res) => {
    res.render('./news/news');
});

router.get('/overview', (req, res) => {
    News.find().sort('-date').limit(5).exec(function(err, news) {
        PressRelease.find().sort('-date').limit(5).exec(function(err, press) {
            res.render('./news/overview', {news, press});
        });
    });
});

router.get('/press-releases', (req, res) => {
    res.render('./news/press-release');
});

router.get('/events', (req, res) => {
    res.render('./news/news-events');
});

router.get('/video', (req, res) => {
    res.render('./news/video');
});

router.get('/image-gallery', (req, res) => {
    res.render('./news/image-gallery');
});

module.exports = router;