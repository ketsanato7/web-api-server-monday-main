const mongoose = require("mongoose");

const loan_collaterals = new mongoose.Schema({
    id: Number,

 
    collateral_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "collateral",
    }, ],
    loan_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "loan",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("loan_collaterals", loan_collaterals);