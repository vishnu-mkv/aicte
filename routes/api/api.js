const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const newsRouter = require('./news');
const pressReleaseRouter = require('./press-release');
const imageGalleryRouter = require('./image-gallery');
const videoGalleryRouter = require('./video-gallery');

const uri = `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.qpr98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(data => {
	console.log("connected to db");
})
.catch(err => console.log(err));

router.use('/news', newsRouter);
router.use('/press-release', pressReleaseRouter);
router.use('/image-gallery', imageGalleryRouter);
router.use('/video-gallery', videoGalleryRouter);

module.exports = router;