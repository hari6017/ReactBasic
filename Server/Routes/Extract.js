var express = require('express');
var Schema = require('../Dbconn/Details');

var Router = express.Router();

Router.post('/',function(req,res,err)
{
    console.log(req.body.uname);
    console.log(req.body.pass);
    console.log("hari");
Schema.find({fname : req.body.uname, lname : req.body.pass}, function(err, d)
{
  console.log(d);
});






});

module.exports = Router;
