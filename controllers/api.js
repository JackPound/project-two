const express        = require('express');
const router         = express.Router();
const igdb           = require('igdb-api-node').default;
const client         = igdb(process.env.IGDB_KEY);


router.get('/genres', function(req, res){
	client.genres({
		ids: [2, 4, 12],
	    fields: "*"
}).then(response => {
	   res.send(response.body);
	}).catch(error => {
	    throw error;
	});
});
router.get('/games/', function(req, res){
	client.games({
		search: 'zelda'

	}, [
	'name',
	'cover',
	'platforms',
	'genres',
	'summary'
	]).then(response => {
	   res.send(response.body);
	}).catch(error => {
	    throw error;
	});
});
////using for search from form on search page
router.get('/games/search', function(req, res){
	// console.log(req.query);
	client.games({
		limit: 2,
		search: req.query.name
	}, [
	'name',
	'cover',
	'platforms',
	'genres',
	'summary'
	]).then(response => {
		var searchJson;
		searchJson = response.body
		console.log('searchJson:', searchJson);
		res.render('search', {results: searchJson})
	}).catch(error => {
		throw error;
	});
});
module.exports = router;


















//  random stuff for testing 
//              |
//              |
//              |
//              |
//              |
//              |
//              V

// let arr = []
// for(i=1; i<35; i++){
//   arr.push(i)
// }
// arr


// displayResults = () => {
// 	$('#searchResults').append(
//     $('<li>').append(response.body)      
// 	);
// }

// results.forEach(function(game){	
// })

// results[0].name
// results[0].cover
// results[0].platforms
// results[0].genres
// results[0].summary




// hidden form inputs for submitting to favorite games




