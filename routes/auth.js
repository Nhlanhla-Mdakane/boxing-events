
const router = require('express').Router();
const passport = require('passport');

router.get('/googleLogin', passport.authenticate('google', {scope: ['profile']}));

//This path must match the redirect URI configured on Google's Developer console for this app
router.get('/login/googleRedirect', passport.authenticate('google'), (req, res) => {


		res.redirect('/');
		res.send('Callback URI' + req.user);




});

router.get('/facebookLogin', passport.authenticate('facebook'));

//This path must match the redirect URI configured on Facebook's Developer console for this app
router.get('/login/facebookRedirect', passport.authenticate('facebook'), (req, res) => {


res.redirect('/');
		res.send('Callback URI' + req.user);




});

router.get('/githubLogin', passport.authenticate('github'));

//This path must match the redirect URI configured on Github's Developer console for this app
router.get('/login/githubRedirect', passport.authenticate('github'), (req, res) => {


res.redirect('/');
		res.send('Callback URI' + req.user);




});

module.exports = router;
