var express = require('express');
var Schema = require('../Dbconn/Details');

var Router = express.Router();

Router.post('/',function(req,res,err)
{
    console.log(req.body);
    res.send(req.body);
    var Save1 = new Schema(req.body);
    Save1.save();



});

module.exports = Router;
