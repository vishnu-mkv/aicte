var fs = require('fs');
const mongoose = require("mongoose");

var Banner = require('./data/models/banner');
var QuickLink = require('./data/models/quick-links');
var Announcement = require('./data/models/announcement');
var News = require('./data/models/news');
var PressRelease = require('./data/models/press-release');
const { resolve } = require('path');


const LoadData = (app) => {

    return new Promise((resolve, reject) => {
        // nav data
        var navData = JSON.parse(fs.readFileSync('./data/json/nav.json', 'utf8'));
        app.locals.navData = navData;
        // app.locals.banners = JSON.parse(fs.readFileSync('./data/banner.json', 'utf8'));
        // app.locals.quicklinks = JSON.parse(fs.readFileSync('./data/quick-links.json', 'utf8'));
        // app.locals.announcements = JSON.parse(fs.readFileSync('./data/announcements.json', 'utf8'));
        // app.locals.news = JSON.parse(fs.readFileSync('./data/newsroom.json', 'utf8'));
        // app.locals.press = JSON.parse(fs.readFileSync('./data/press-releases.json', 'utf8'));
        // resolve();
        
        Promise.all([QuickLink.find(), Banner.find(), Announcement.find(), News.find(), PressRelease.find()])
        .then( data => {
            app.locals.quicklinks = data[0];
            app.locals.banners = data[1];
            app.locals.announcements = data[2];
            app.locals.news = data[3];
            app.locals.press = data[4];
            resolve();
        })
        .catch(err => reject(err));
    });
}


const uri = `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.qpr98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectToDB = (app) => {
    return new Promise((resolve, reject) => {
        console.log("Initiating DB Connection");
        mongoose.connect(uri)
        .then(_ => {
            console.log("connected to db");
            LoadData(app)
            .then( _ => {
                console.log("Data fetch complete.")
                resolve();
            })
            .catch(err => reject(err));      
        })
        .catch(err => reject(err));
        // resolve();
    })
};

module.exports = connectToDB;