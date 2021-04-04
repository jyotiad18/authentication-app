const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({	
	displayName: {
		type: String,		
	},
	email: {
		type: String		
	},
	image: {
		type: String		
	},
	password: {
		type: String		
	},	
	socialID: {
		type: String
	},
	socialType: {
		type: String
	},
	firstName: {
    	type: String
	},
	lastName: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

//Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
userSchema.methods.getSignedJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE
	});
};

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('users', userSchema);