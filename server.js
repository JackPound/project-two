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
const isLoggedIn       = require('./middleware/isLoggedIn');

var app = express();
// npm for accessing igdb api
var client = igdb(process.env.IGDB_KEY);
// connect to database
mongoose.connect('mongodb://localhost/project2');
// set and use statements
// view engine to EJS
app.set('view engine', 'ejs');
// name a port hidden in .env or 3000
app.set('port', process.env.PORT || 3000);
// body parser to do body parse things
app.use(bodyParser.urlencoded({extended: false}));
// use layouts for express i.e. layout.ejs in views
app.use(expressLayouts);
// ?????
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitated: true
}));
// use flash to do flash alerts i.e. on login success/failures
app.use(flash()); 
// use passport for authentication of users
app.use(passport.initialize());
app.use(passport.session());
// make the current user a usable object and flash alerts possible everywhere
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

// home page route
app.get('/', function(req, res){
	res.render('home');
})
// profile route accessable if logged in
app.get('/profile', isLoggedIn, function(req, res){
	res.render('profile')
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
app.use('/account', require('./controllers/account'));
app.use('/api', require('./controllers/api'));
// listen
app.listen(app.get('port'), () => {
	console.log(`Listening PORT: ${app.get('port')}`)
});