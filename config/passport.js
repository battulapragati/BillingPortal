//Passport local
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
//const User = require('../models/User');
var mongoUtil = require( '../mongoUtil.js' )



 passport.use(
    new GoogleStrategy({
        // options for google strategy
        
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
      var db = mongoUtil.getDb();
      db.collection("OauthUsers").findOne({email: profile.emails[0].value}, function(err, result) {
        if (err) { /* handle err */ }
    
        if (result) {
            // we have a result
            //return done(null, false, { message: 'That email is not registered' });
              console.log("user exists")
              done(null, result);
        } else {
            // we don't
          
            console.log("user does not exists exists")
              done(null, result);
        }
    })
    //.then(user => {
    //         if (user) {
    //           //return done(null, false, { message: 'That email is not registered' });
    //           console.log("user exists")
    //           done(null, user);
    //         }
    //         else
    //         {
    //           console.log("user does not exists exists")
    //           done(null, user);
    //         }
    //     });
    })
);

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      var db = mongoUtil.getDb();
      db.collection("OauthUsers").findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  
  passport.serializeUser(function(result, done) {
    done(null, result);
  });

  passport.deserializeUser((user, done) => {
    done(null, {
      provider: user.provider,
      id: user.provider_id
    });
  });

  // passport.deserializeUser(function(id, done) {
  //   var db = mongoUtil.getDb();
  //   db.collection("OauthUsers").findById(id, function(err, user) {
  //     done(err, user);
  //   });
  // });

