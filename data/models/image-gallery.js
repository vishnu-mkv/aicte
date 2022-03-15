const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const imageGallerySchema = new Schema({
    cover: String,
    date: Date,
    images: [String],
    name: String
}, {timestamps: true});

imageGallerySchema.plugin(paginate);

const ImageGallery = mongoose.model('image-gallery', imageGallerySchema);
module.exports = ImageGallery;