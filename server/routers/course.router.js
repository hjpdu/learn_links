var express = require('express');
var router = express.Router();
var Course = require('../models/course.model.js');

router.get('/courses', function(req, res){
  Course.find({}, function(err, courses){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      courses: courses
    });
  });
});
router.get('/courses/:id', function(req, res){
  Course.find({_id: req.params.id}, function(err, course){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      course: course
    });
  });
});
router.post('/courses', function(req, res){
  var course = new Course(req.body);
  course.postDate = new Date();
  course.save(function(err){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
      msg: 'Success! You created a new course.'
    });
  });
});
router.put('/courses/:id', function(req, res){
  Course.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldCourse){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
      msg: oldCourse
    });
  });
});
router.delete('/courses/:id', function(req,res){
  Course.findOneAndRemove({_id: req.params.id}, function(err, deletedCourse){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      msg: deletedCourse
    });
  });
});

module.exports = router;
