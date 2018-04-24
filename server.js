// required modules and routes/files
require('dotenv').config();
const bodyParser       = require('body-parser');
const express          = require('express');
const expressLayouts   = require('express-ejs-layouts');
const flash            = require('connect-flash')
const igdb             = require('igdb-api-node').default;
const mongoose         = require('mongoose');
const passport		   = require('./config/passportConfig');
const session 	       = require('express-session');

var app = express();
// npm for accessing igdb api
var client = igdb(process.env.IGDB_KEY);
// connect to database
mongoose.connect('mongodb://localhost/project2');
// set and use statements
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressLayouts); // TODO setup express layouts
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitated: true
}));
app.use(flash()); // TODO make flash alerts 
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

// top level routes
app.get('/', function(req, res){
	res.render('home');
})
app.get('/genres', function(req, res){
	client.genres({
	    fields: "name"
}).then(response => {
	   res.send(response.body);
	}).catch(error => {
	    throw error;
	});
});
app.get('/games', function(req, res){
	client.games({
		ids: [1, 10, 100, 1000, 10000],
	    fields: "*"
}).then(response => {
	   res.send(response.body);
	}).catch(error => {
	    throw error;
	});
});

// routes from any controllers
app.use('/auth', require('./controllers/auth'));

// listen
app.listen(app.get('port'), () => {
	console.log(`Listening PORT: ${app.get('port')}`)
});









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
for(i=1; i<21; i++){
  arr.push(i)
}
arr






