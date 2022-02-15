const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const newsSchema =  new Schema({
    date: String,
    headline: String,
    content: String,
    source: String,
    url: String
}, {timestamps: true});

newsSchema.plugin(paginate);

const News = mongoose.model('new',newsSchema);
module.exports = News;