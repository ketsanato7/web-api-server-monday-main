const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  PayloadFormatIndicator : {
    type: String  },
    PointOfInitiationMethod:String,
    UnionPayTag :String,
    
  created_date: {
    type: Date,
  },
  updated_date: {
    type: Date,
  },
});

module.exports = mongoose.model("Register", Schema);
