const express = require('express');
const router = express.Router();
const newsRouter = require('./news');
const pressReleaseRouter = require('./press-release');
const imageGalleryRouter = require('./image-gallery');
const videoGalleryRouter = require('./video-gallery');
const quickLinksRouter = require('./quick-links');
const announcementRouter = require('./announcement');
const bannerRouter = require('./banner');

router.use('/news', newsRouter);
router.use('/press-release', pressReleaseRouter);
router.use('/image-gallery', imageGalleryRouter);
router.use('/video-gallery', videoGalleryRouter);
router.use('/quick-links', quickLinksRouter);
router.use('/announcement', announcementRouter);
router.use('/banner', bannerRouter);

module.exports = router;