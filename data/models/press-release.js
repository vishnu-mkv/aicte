const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const pressReleaseSchema = new Schema({
    date: String,
    url: String,
    content: String
}, {timestamps: true});

pressReleaseSchema.plugin(paginate);

const PressRelease = mongoose.model('Pressrelease',pressReleaseSchema);
module.exports = PressRelease;