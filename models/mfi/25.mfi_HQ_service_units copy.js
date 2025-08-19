const mongoose = require("mongoose");

const mfi_HQ_service_units = new mongoose.Schema({
    id: Number,

 
    service_unit_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "service_unit",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("mfi_HQ_service_units", mfi_HQ_service_units);