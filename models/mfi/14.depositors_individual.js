const mongoose = require("mongoose");

const depositors_individual = new mongoose.Schema({
    id: Number,

 
    deposit_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "deposit",
    }, ],
    depositor_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "depositor",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("depositors_individual", depositors_individual);