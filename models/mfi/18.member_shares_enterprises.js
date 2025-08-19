const mongoose = require("mongoose");

const member_shares_enterprises = new mongoose.Schema({
    id: Number,

 
    member_shares_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "member_shares",
    }, ],
    enterprise_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enterprise",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("member_shares_enterprises", member_shares_enterprises);