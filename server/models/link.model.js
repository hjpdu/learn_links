var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  _course:{
    type: Schema.ObjectId, ref: 'Course'
  },
  step:{
    type: Number,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  body:{
    type: String,
  },
  img:{
    type: String
  },
  vid:{
    type: String
  },
  postDate:{
    type: Date,
    required: true
  }

});

var Link = mongoose.model('Link', linkSchema);
module.exports = Link;
