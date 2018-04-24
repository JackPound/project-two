const express        = require('express');
const passport       = require('../config/passportConfig');
const User           = require('../models/user');
const router = express.Router();

router.get('/login', function(req, res){
	res.render('auth/login');
})
router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'You are now logged in',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid Credentials'
}));
router.get('/signup', function(req, res){
	res.render('auth/signup');
})
router.post('/signup', function(req, res, next){
	User.findOne({email: req.body.email}, function(err, user){
		if(err){
			console.log('signup error', err);
			req.flash('error', 'something went wrong, check logs')
			res.redirect('/auth/signup');
		}
		else if(user){
			req.flash('error', 'An account is already registered with this email');
			res.redirect('/auth/login');
		}
		else {
			User.create(req.body, function(err, createdUser){
				if(err){
					req.flash('error', 'trouble creating user');
					return console.log('err', err)
				}
				passport.authenticate('local', {
					successRedirect: '/profile',
					successFlash: 'Successful account creation'
				})(req, res, next);
			})
		}
	})
})
router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'You are now logged out');
	res.redirect('/')
})
module.exports = router;

















module.exports = router;