const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

var userSchema = new mongoose.Schema({
	username: {type: String, unique: true, required: true},
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true}
});
// checks whether the password is correct
userSchema.methods.isAuthenticated = function(password){
// compareSync(typed in password, password in database)
	var isCorrectPassword = bcrypt.compareSync(password, this.password);
	return isCorrectPassword ? this : false;
}

// hash the password before saving a user to the db
userSchema.pre('save', function(next){
	if(!this.isModified('password')) {
		next(); 
	}
	else {
		this.password = bcrypt.hashSync(this.password, 10)
		next();
	}
});

// 
module.exports = mongoose.model('User', userSchema);