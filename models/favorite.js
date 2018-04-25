const mongoose  = require('mongoose');

var favoriteSchema = new mongoose.Schema({
	id: Number,
	name: String,
	summary: String,
	platforms: [Number],
	genres: [Number],
	cover: {
		url: String,
		cloudinary_id: String,
		width: Number,
		height: Number
	}
});

// export model to use elsewhere
module.exports = mongoose.model('Favorite', favoriteSchema);