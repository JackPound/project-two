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
	'cover',
	'genres',
	'name',
	'platforms',
	'summary'
	]).then(response => {
	   res.send(response.body);
	}).catch(error => {
	    throw error;
	});
});

module.exports = router;
