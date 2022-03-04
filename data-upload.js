const mongoose = require("mongoose");
const Model = require(process.argv[2]);
var fs = require('fs');
require('dotenv').config();

const uri = `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.qpr98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(data => {
	console.log("connected to db");
})
.catch(err => console.log(err));

var data = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

// delete all
Model.deleteMany({})
.then(data => console.log(data))
.catch(err => console.log(err));

// insert all
Model.insertMany(data)
.then(data => console.log(data))
.catch(err => console.log(err));