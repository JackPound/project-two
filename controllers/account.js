const express        = require('express');
const passport       = require('../config/passportConfig');
const User           = require('../models/user');
const isLoggedIn       = require('../middleware/isLoggedIn');
const router = express.Router();

//show login page
router.get('/login', function(req, res){
	res.render('account/login');
})
//handle login request
router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile/',
	successFlash: 'You are now logged in',
	failureRedirect: '/account/login',
	failureFlash: 'Invalid Credentials'
}));
//show signup page
router.get('/signup', function(req, res){
	res.render('account/signup');
})
//handle signup request
router.post('/signup', function(req, res, next){
	User.findOne({email: req.body.email}, function(err, user){
		if(err){
			console.log('signup error', err);
			req.flash('error', 'something went wrong, check logs')
			res.redirect('/account/signup');
		}
		else if(user){
			req.flash('error', 'An account is already registered with this email');
			res.redirect('/account/login');
		}
		else {
			User.create(req.body, function(err, createdUser){
				if(err){
					req.flash('error', 'trouble creating user');
					return console.log('err', err)
				}
				passport.authenticate('local', {
					successRedirect: '/profile/',
					successFlash: 'Successful account creation'
				})(req, res, next);
			})
		}
	})
})
//handle signout request
router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'You are now logged out');
	res.redirect('/')
})

module.exports = router;