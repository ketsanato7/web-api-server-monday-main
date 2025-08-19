const mongoose = require("mongoose");

const deposit_types = new mongoose.Schema({
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

module.exports = mongoose.model("deposit_types", deposit_types);