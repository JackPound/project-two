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
router.get('/games', function(req, res){
	client.games({
		ids: [1, 10, 100, 1000, 10000],
	    fields: "*"
}).then(response => {
	   res.send(response.body);
	}).catch(error => {
	    throw error;
	});
});

router.get('/games/:id', function(req, res){
	console.log(req.body);
	res.redirect('/profile')
})
module.exports = router;






//  random stuff for testing 
//              |
//              |
//              |
//              |
//              |
//              |
//              V
//
let arr = []
for(i=1; i<35; i++){
  arr.push(i)
}
arr