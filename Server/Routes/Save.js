var express = require('express');
var Schema = require('../Dbconn/Details');
var passport = require('passport');

var Router = express.Router();

Router.post('/',
  passport.authenticate('local', { successRedirect: '/login',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

Router.post('/h',function(req,res,err)
{
    console.log(req.body);
    res.send(req.body);
    var Save1 = new Schema(req.body);
    Save1.save();



});

module.exports = Router;
