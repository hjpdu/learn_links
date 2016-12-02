var express = require('express');
var router = express.router();
var Course = require('../models/course.model.js');

router.get('/courses', function(req, res){});
router.get('courses/:id', function(req, res){});
router.post('/courses', function(req, res){});
router.put('/courses/:id', function(req, res){});
router.delete('/courses/:id', function(req,res){});

module.exports = router;
