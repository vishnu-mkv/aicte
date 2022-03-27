const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    email: String
}, {timestamps: true});

subscriptionSchema.plugin(paginate);

const subscription = mongoose.model('subscription', subscriptionSchema);
module.exports = subscription;