/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const models = require('../models/index.js');
const Page = models.Page;
const User = models.User;


router.get('/', function(req, res, next){
	models.Page.findAll({
			attributes: ['title']
		}).then(function(allPages){
			
			var passObj = {allPages: allPages}

			res.render('index', passObj);
		}).catch(function(err){
			console.log(err);
		});

});




router.post('/', function(req, res, next){
	console.log(req.body)
	let page = Page.build({
		title: req.body.title,
		content: req.body.content,
	
	});

	page.save()
	.then(function(value){
		res.render('wikipage', {value});
	}).catch(function(err){
		console.log(err);
	});
	
});

router.get('/add', function(req, res, next){
	res.render('addpage', {names: 'Submit to add a Page'});
});

router.get('/:urlTitle', function (req, res, next){
		Page.findOne({
	
			where: {
				urlTitle: req.params.urlTitle
				}
		}).then(function(page){
			return Promise.all([page.getAuthor(), page]);
		}).then(function(value){
			res.render('wikipage', {author: value[0], page: value[1]})
		}).catch(function(err){
		console.log(err);
	});

	
});


module.exports = router;