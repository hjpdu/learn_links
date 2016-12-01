var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  author:{
    type: String, //this will change
    required: true
  },
  postDate:{
    type: Date,
    required:true
  },
  links: [{}]
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;
