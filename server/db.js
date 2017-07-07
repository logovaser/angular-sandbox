/**
 * Created by logov on 04-May-17.
 */

var express = require('express'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/angular-sandbox');

var db = mongoose.connection;

module.exports = new Promise(function (resolve, reject) {

    db.on('error', function() {
        console.error('connection error:');
        reject();
    });
    db.once('open', function () {
        console.log('mongodb is connected!');
        resolve();
    });

});
