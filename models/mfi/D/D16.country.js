const mongoose = require("mongoose");

const country = new mongoose.Schema({
    id:Number,
    en_short:String,
    en_formal: String,
    country_code:String,
    
    en_code: String,

    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("countries", country);