const mongoose = require("mongoose");

const trial_balance = new mongoose.Schema({
    id: Number,
    account_no: Number,
    account_title: String,
    trial_balance_debit: Number,
    trial_balance_credit: Number,
    adjustment_debit: Number,
    adjustment_credit: Number,
    adjusted_trial_balance_debit: Number,
    adjusted_trial_balance_credit: Number,

    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("trial_balance", trial_balance);