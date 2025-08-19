const mongoose = require("mongoose");

const mfi_branch_service_units = new mongoose.Schema({
    id: Number,

 
    mfi_branch_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "mfi_branch",
    }, ],
        service_unit_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "service_unit_id",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("mfi_branch_service_units", mfi_branch_service_units);