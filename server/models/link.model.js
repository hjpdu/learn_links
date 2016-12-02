var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  course:{
    type: Schema.Types.ObjectId, ref: 'Course'
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
  }

});

var Link = mongoose.model('Link', linkSchema);
module.exports = Link;
