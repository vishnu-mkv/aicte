const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    title : String,
    image_url : String,
    summary : String,
    url : String,
    url_text : String
}, {timestamps: true});

bannerSchema.plugin(paginate);

const Banner = mongoose.model('Banner',bannerSchema);
module.exports = Banner;