const mongoose = require("mongoose");

const districts = new mongoose.Schema({
    id: Number,
    value: String,
    district_code: String,

    province_code: String,
    province_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("districts", districts);