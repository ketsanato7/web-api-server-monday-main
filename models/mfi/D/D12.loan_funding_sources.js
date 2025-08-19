const mongoose = require("mongoose");

const loan_funding_sources = new mongoose.Schema({
   id: Number,
    value_LA: String,
        value_EN: String,
    code_LA: String,
    code_EN: String,
    status:String,

    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("loan_funding_sources", loan_funding_sources);