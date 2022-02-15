const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const videoGallerySchema = new mongoose.Schema({
    thumbnail: String,
    title: String,
    video_url: String
}, {timestamps: true});

videoGallerySchema.plugin(paginate);

const VideoGallery = mongoose.model('video-gallery', videoGallerySchema);
module.exports = VideoGallery;

