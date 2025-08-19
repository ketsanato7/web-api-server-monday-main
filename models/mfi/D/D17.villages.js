const mongoose = require("mongoose");

const villages = new mongoose.Schema({
    id: Number,
    value: String,
    village_code: String,
    district_code: String,    
    district_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "districts",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("villages", villages);