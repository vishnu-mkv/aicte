const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    title : String,
    url : String
}, {timestamps: true});

announcementSchema.plugin(paginate);

const Announcement = mongoose.model('Announcement',announcementSchema);
module.exports = Announcement;