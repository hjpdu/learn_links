var express = require('express');
var router = express.Router();
var Link = require('../models/link.model.js');

router.get('/links', function(req, res){});
router.post('/links',function(req, res){});
router.put('/links/:id', function(req, res){});
router.delete('/links/:id', function(req, res){});

module.exports = router;
