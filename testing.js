const express        = require('express');
const router         = express.Router();
const mongoose       = require('mongoose');
const igdb           = require('igdb-api-node').default;
const client         = igdb(process.env.IGDB_KEY);
const User           = require('../models/user');
mongoose.connect('mongodb://localhost/project2');






User.findOne({_id: req.user._id}, function(err, user){

}