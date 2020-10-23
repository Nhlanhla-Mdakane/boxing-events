const passport = require('passport');


const GoogleStrat = require('passport-google-oauth20');

const FacebookStrat = require('passport-facebook');
const GithubStrat = require('passport-github');
const keys = require('./keys'); //We have created keys.js to store our sensitive information including the clientSecret for our app. See keys.js
const User = require('../models/user.model.js');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

/*
This checks to see if user is database, if not it creates user
*/


passport.use(new GoogleStrat({
    //options for stratergy
    callbackURL: '/login/googleRedirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

}, (accessToken, refreshToken, profile, done) => {
    console.log('passport function fired')
    console.log(profile);
    User.findOne({
        googleID: profile.id
    }).then((currentUser) => {

        if (currentUser) {
            console.log("new user" + currentUser);
            done(null, currentUser);
        } else {

            new User({
                username: profile.displayName,
                googleID: profile.id,
                events: [{}]

            }).save().then((newUser) => {

                console.log('new User' + newUser);
                done(null, newUser);
            });
        }
    });
}));

/*
This checks to see if user is database, if not it creates user
*/

passport.use(new FacebookStrat({
    //options for stratergy
    callbackURL: '/login/facebookRedirect',
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret

}, (accessToken, refreshToken, profile, done) => {
    console.log('passport function fired')
    console.log(profile);
    User.findOne({

        facebookID: profile.id,

    }).then((currentUser) => {

        if (currentUser) {
            console.log("new user" + currentUser);
            done(null, currentUser);
        } else {

            new User({
                username: profile.displayName,
                facebookID: profile.id,
                events: [{}]

            }).save().then((newUser) => {

                console.log('new User' + newUser);
                done(null, newUser);
            });
        }
    });
}));

/*
This checks to see if user is database, if not it creates user
*/
passport.use(new GithubStrat({
    //options for stratergy
    callbackURL: '/login/githubRedirect',
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret
    
}, (accessToken, refreshToken, profile, done) => {
    console.log('passport function fired')
    console.log(profile);
    User.findOne({
        githubID: profile.id
    }).then((currentUser) => {

        if (currentUser) {
            console.log("new user" + currentUser);
            done(null, currentUser);
        } else {

            new User({
                username: profile.displayName,
                githubID: profile.id,
                events: [{}]

            }).save().then((newUser) => {

                console.log('new User' + newUser);
                done(null, newUser);
            });
        }
    });
}));
