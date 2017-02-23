
var mongoose = require('mongoose');


var Details = mongoose.Schema (
  {
    fname : String,
    lname : String,
    date : Date,
    gender : String,
    Occupation : String,

  }
);

module.exports=mongoose.model('hari',Details);
