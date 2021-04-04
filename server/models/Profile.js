const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({	
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	imageUrl: {
    	type: String,
	},
	imageFileName: {
		type: String,
	},
	bio: {
		type: String
	},
	phone: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('profiles', profileSchema);