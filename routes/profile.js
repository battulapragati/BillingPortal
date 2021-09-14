const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
//var mongoUtil = require( '../mongoUtil.js' )
const { forwardAuthenticated } = require('../config/auth');
var currentEmail = require('../config/passport')

 //profile
 router.get('/', (req, res) => {
  const db=req.db;
  db.collection("OauthUsers").findOne({
    email: currentEmail.currentEmail
  }).then(user => {
    //console.log(user.email);
    //console.log(user.name);
    res.render('profile.ejs',{user});
  });

});

  //update password
  router.post('/updatePassword', (req, res) => {
    const db=req.db;
    const {password, newPassword, confirmPassword } = req.body;
    //console.log(req.body);
  

  db.collection("OauthUsers").findOne({
    email: currentEmail.currentEmail
  }).then(user => {
    let errors = [];

  if (!password || !newPassword || !confirmPassword) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (newPassword != confirmPassword) {
  errors.push({ msg: 'Passwords do not match' });
  }
  if (password == newPassword) {
    errors.push({ msg: 'hi' });
    }
  if (newPassword.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }


  if (errors.length > 0) {
    res.render('profile', {
      errors,
      user
    });
  }
    // console.log(user.password);
    else{ bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        
       bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            //if (err) throw err;
            pass = hash;
            db.collection("OauthUsers").updateOne({email: user.email}, {$set:{"password":pass}},function(err, res){
              if (err) throw err;
              console.log("Password Changed")
              //alert('Password updated');
            });
            res.redirect('/users/profile',{user});
            });
              
            });
        //return done(null, user);
       }
      else {
       console.log('Current Password is incorrect')
        var error = 'Current Password is incorrect';
       res.render('profile', {user}, error);
      }
    
    
    });
  }

  });


  });
  module.exports = router;