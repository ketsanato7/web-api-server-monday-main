const mongoose = require("mongoose");

const member_shares = new mongoose.Schema({
    id: Number,

 
    member_type_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "member_type",
    }, ],
        from_date: String,
    to_date: String,
    initial_contribution: String,
    contribution: String,
    withdrawal: String,
    remaining_balance: String,


    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("member_shares", member_shares);