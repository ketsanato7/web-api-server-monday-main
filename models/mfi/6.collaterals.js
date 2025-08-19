const mongoose = require("mongoose");

const collaterals = new mongoose.Schema({
    id: Number,
    name: String,
    collateral_no: String,
    date_of_issue: String,
    value:mongoose.Decimal128,
        other_details: String,

    category_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("collaterals", collaterals);