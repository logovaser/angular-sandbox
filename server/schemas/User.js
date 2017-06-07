/**
 * Created by logov on 04-May-17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema(require('./models/User')));
