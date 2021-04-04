const express = require('express');
const passport = require('passport');
const session = require('express-session');

const router = express.Router({ mergeParams: true });

let CLIENT_PAGE_URL, SOCIAL_LOGIN_URL;
if (process.env.NODE_ENV === 'production') {
	CLIENT_PAGE_URL = 'https://authenticate-dev-app.herokuapp.com/';
	SOCIAL_LOGIN_URL = 'https://authenticate-dev-app.herokuapp.com/sociallogin/';
} else {
	CLIENT_PAGE_URL = 'http://localhost:3000/';
	SOCIAL_LOGIN_URL = 'http://localhost:3000/socallogin/';
}

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',passport.authenticate('facebook', { failureRedirect: CLIENT_PAGE_URL}),
  function (req, res) {    
   res.redirect(SOCIAL_LOGIN_URL + req.user.socialID);
});


router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: CLIENT_PAGE_URL,
    successRedirect: SOCIAL_LOGIN_URL,
  })  
);

router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile'],
    prompt: 'select_account',
  })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: CLIENT_PAGE_URL,
    successRedirect: SOCIAL_LOGIN_URL,
  }) 
);

module.exports = router;