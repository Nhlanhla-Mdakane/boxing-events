/* Here we Create a schema and model for our users to specify what we want written to our database. */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username:String,
	googleID: String,
	facebookID: String,
	githubID: String,
	events: [{
    event:String,
		date:String,
		time:String,
		undercard:String,
		poster:String
	}]

});



let User = mongoose.model('User', UserSchema);
module.exports = User;
