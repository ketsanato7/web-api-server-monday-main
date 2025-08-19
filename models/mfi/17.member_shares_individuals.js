const mongoose = require("mongoose");

const member_shares_individuals = new mongoose.Schema({
    id: Number,

 
    member_shares_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "member_shares",
    }, ],
    member_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "member_id",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("member_shares_individuals", member_shares_individuals);