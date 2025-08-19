const mongoose = require("mongoose");

const accounting_levels = new mongoose.Schema({
    id: Number,
    value: String,
    status:String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("accounting_levels", accounting_levels);