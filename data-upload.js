const mongoose = require("mongoose");
const Model = require('./data/models/image-gallery');
var fs = require('fs');
require('dotenv').config();

const uri = `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.qpr98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(data => {
	console.log("connected to db");
})
.catch(err => console.log(err));

var data = JSON.parse(fs.readFileSync('./data/image-gallery.json', 'utf8'));

Model.insertMany(data)
.then(data => console.log(data))
.catch(err => console.log(err));