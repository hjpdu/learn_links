var express = require('express');
var server = express();
var mongoose = require('mongoose');
var courseRouter = require('./server/routers/course.router.js');
var linkRouter = require('./server/routers/link.router.js');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(mongoURI);

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});
});
server.use(courseRouter);
server.use(linkRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
