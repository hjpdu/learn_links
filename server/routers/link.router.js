var express = require('express');
var router = express.Router();
var Link = require('../models/link.model.js');

router.get('/links', function(req, res){
  Link.find({}, function(err, links){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      links:links
    });
  });
});
router.post('/links',function(req, res){});
router.put('/links/:id', function(req, res){});
router.delete('/links/:id', function(req, res){});

module.exports = router;
