const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const contactUsSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    message: String,
    phone_number: Number
}, {timestamps: true});

contactUsSchema.plugin(paginate);

const contactUs = mongoose.model('contact-us', contactUsSchema);
module.exports = contactUs;