var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	models.Post.find(function(err, posts) {
  		res.render('index', { title: 'Welcome to my blog', posts: posts});
	});
});

router.get('/create', function(req, res) {
	res.render('create', {})
});

router.post('/create', function(req, res) {
	var post = new models.Post({ name: req.body.name, content: req.body.content });
	post.save(function(err, obj) {
		res.send("OK");
	});
});

router.get('/edit/:id', function(req, res) {
	models.Post.findById(req.params.id, function(err, obj) {
		res.render('edit', {post: obj })
	})
});

router.post('/edit/:id', function(req, res) {
	models.Post.findById(req.params.id, function(err, obj) {
		obj.name = req.body.name;
		obj.content = req.body.content;

		obj.save(function(err2, obj2) {
			res.send("OK");	
		})
	})
});

module.exports = router;
