/**
 * Created by logov on 07.06.17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
    login: String,
    password: String,
    subscriptions: [Schema.ObjectId],
    posts: [require('./Post')]
};
