const express        = require('express');
const router         = express.Router();
const igdb           = require('igdb-api-node').default;
const client         = igdb(process.env.IGDB_KEY);

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

router.post('/games',function(req, res){
	console.log(req.body);
	var newFavorite = req.body;
	console.log(newFavorite);
})

// app.delete('games/:id', function(req, res){
// 	var gameId = req.params.id;
// 	Favorites.findOneAndRemove({_id: gameId}, function (err, deleteFav){

// 	})
// })
module.exports = router;