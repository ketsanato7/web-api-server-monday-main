const mongoose = require("mongoose");

const borrowers_enterprise = new mongoose.Schema({
    id: Number,

 
    enterprise_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enterprise",
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

module.exports = mongoose.model("borrowers_enterprise", borrowers_enterprise);