var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({});

var Link = mongoose.model('Link', linkSchema);
module.exports = Link;
