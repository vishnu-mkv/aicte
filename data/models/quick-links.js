const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const quickLinksSchema = new Schema({
    title : String,
    url : String
}, {timestamps: true});

quickLinksSchema.plugin(paginate);

const QuickLinks = mongoose.model('Quicklink',quickLinksSchema);
module.exports = QuickLinks;