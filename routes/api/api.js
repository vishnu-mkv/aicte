const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const newsRouter = require('./news');
const pressReleaseRouter = require('./press-release');
const imageGalleryRouter = require('./image-gallery');
const videoGalleryRouter = require('./video-gallery');
const quickLinksRouter = require('./quick-links');
const announcementRouter = require('./announcement');
const bannerRouter = require('./banner');
const contactUsRouter = require('./contact-us');
const subscriptionRouter = require('./subscription');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.use(limiter);

router.use('/news', newsRouter);
router.use('/press-release', pressReleaseRouter);
router.use('/image-gallery', imageGalleryRouter);
router.use('/video-gallery', videoGalleryRouter);
router.use('/quick-links', quickLinksRouter);
router.use('/announcement', announcementRouter);
router.use('/banner', bannerRouter);
router.use('/contact-us', contactUsRouter);
router.use('/subscriptions', subscriptionRouter);

module.exports = router;