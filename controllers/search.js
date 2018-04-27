const express        = require('express');
const router         = express.Router();
const mongoose       = require('mongoose');
const igdb           = require('igdb-api-node').default;
const client         = igdb(process.env.IGDB_KEY);
const User           = require('../models/user');
mongoose.connect('mongodb://localhost/project2');
// show search page
router.get('/', function(req, res){
	res.render('search', {results: null})
})
//using for search from form on search page
router.get('/games', function(req, res){
	client.games({
		limit: 2,
		search: req.query.name
	}, [
	'cover',
	'genres',
	'name',
	'platforms',
	'summary'
	]).then(response => {
		var searchJson;
		searchJson = response.body
		// console.log('searchJson:', searchJson);
		res.render('search', {results: searchJson})
	}).catch(error => {
		throw error;
	});
});

router.post('/games/',function(req, res){
	User.findOne({_id: req.user._id}, function(err, user){
		if(err){
			console.log('error saving fav game', err);
		}
		else if(user){
			user.favorites.push({
				cover: req.body.cover,
				genres: req.body.genres.split(',').map(Number),
				name: req.body.name,
				platforms: req.body.platforms.split(',').map(Number),
				summary: req.body.summary
			});
			user.save(function(err){
				if(err) {
					console.log('still problems', err);
				}
			})
			res.redirect('/search')
		}
	})
})



module.exports = router;

