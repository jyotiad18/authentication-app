const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/User');
const Profile = require('../models/Profile');

const updateSocialData = async (req, accessToken, profile, cb) => {	
	const user = await User.findOne({ socialID: profile.id });
	if (!user) {
		const userData = {
			socialID: profile.id,
			displayName: profile.displayName,
			image: profile.image,
			email: profile.email,
			socialType: profile.provider
		}
		const newUser = await User.create(userData);
		const profileData = {
			user: newUser._id,
			name: profile.displayName,
			email: profile.email,
			imageUrl: profile.image
		}
		await Profile.create(profileData);
		cb(null, newUser);	
	} else 
   cb(null, user);
}

module.exports = (passport) => {
	passport.serializeUser((user, cb) => {		
		cb(null, user);
	});

	passport.deserializeUser((obj, cb) => {		
		cb(null, obj);
	});	
	
/** for facebook **/	
	passport.use(new FacebookStrategy({
		clientID: process.env.FACEBOOK_CLIENT_ID,
	    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		callbackURL: 'https://authenticate-dev-app.herokuapp.com/api/socalAuths/facebook/callback',
		profileFields: ['email', 'displayName', 'photos'],
		passReqToCallback: true	
	},
		function (req, accessToken, refereshToken, profile, cb) {			
			profile['image'] = profile?.photos ? profile.photos[0].value : '';
			profile.email = profile?.emails ? profile.emails[0].value : '';			
			updateSocialData(req, accessToken, profile, cb);
		}
    ));
/** End of facebook **/	

/** for google **/	
	passport.use(new GoogleStrategy({
		clientID: process.env.FACEBOOK_CLIENT_ID,
	    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		callbackURL: '/google/callback',		
		passReqToCallback: true			
	},
		function (req, accessToken, refereshToken, profile, cb) {
			profile['image'] = profile.picture;
			updateSocialData(req, accessToken, profile, cb);			
		}
    ));
/** End of facebook **/
	
/** for goole **/	
	passport.use(new GitHubStrategy({
		clientID: process.env.FACEBOOK_CLIENT_ID,
	    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		callbackURL: '/google/callback',		
		passReqToCallback: true			
	},
		function (req, accessToken, refereshToken, profile, cb) {
			profile['image'] = profile.photo[0].value;
			updateSocialData(req, accessToken, profile, cb);			
		}
    ));
/** End of facebook **/	
}  
