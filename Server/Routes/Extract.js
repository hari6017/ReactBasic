var express = require('express');
var User = require('../Dbconn/Details');


var Router = express.Router();

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  Router.post('/',function(req,res,err)
  {
    username = req.body.uname;
    password = req.body.pass;
passport.use(new LocalStrategy(

  function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
}

  ));
});
module.exports = Router;
