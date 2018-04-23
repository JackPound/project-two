// required modules and routes/files
// require('dotenv').config();
const bodyParser       = require('body-parser');
const express          = require('express');
const mongoose         = require('mongoose');

var app = express();
// connect to database
mongoose.connect('mongodb://localhost/project2');
// set and use statements
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));




// top level routes
app.get('/', function(req, res){
	res.render('home');
})




// routes from any controllers





// listen
app.listen(app.get('port'), () => {
	console.log(`Listening PORT: ${app.get('port')}`)
});