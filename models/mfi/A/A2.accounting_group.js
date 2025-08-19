const mongoose = require("mongoose");

const accounting_groups = new mongoose.Schema({
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

module.exports = mongoose.model("accounting_groups", accounting_groups);