const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { forwardAuthenticated } = require('../config/auth');
var currentEmail = require('../config/passport')

 //profile
 router.get('/', (req, res) => {
  const db=req.db;
  db.collection("OauthUsers").findOne({
    email: currentEmail.currentEmail
  }).then(user => {
    res.render('profile.ejs',{user});
  });

});

  //update password
  router.post('/updatePassword', (req, res) => {
    const db=req.db;
    const {password, newPassword, confirmPassword } = req.body;  

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
    errors.push({ msg: 'Your old password and new password should be different. Please try again.' });
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
  
    else{ bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        
       bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            pass = hash;
            db.collection("OauthUsers").updateOne({email: user.email}, {$set:{"password":pass}},function(err, res){
              if (err) throw err;
              console.log("Password Changed")
            });
            let errors = [];
            errors.push({ msg: 'Your password has been updated' });
            res.render('profile', {user:user,errors:errors});
            //res.redirect('/users/profile',{user});
            });
              
            });
       }
      else {
       console.log('Current Password is incorrect')
       let errors = [];
       errors.push({ msg: 'Current password is incorrect' });      
       res.render('profile', {user:user,errors:errors});
      }
    
    
    });
  }

  });
  });
  module.exports = router;