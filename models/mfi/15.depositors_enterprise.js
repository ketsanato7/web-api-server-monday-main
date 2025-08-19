const mongoose = require("mongoose");

const depositors_enterprise = new mongoose.Schema({
    id: Number,

 
    deposit_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "deposit",
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

module.exports = mongoose.model("depositors_enterprise", depositors_enterprise);