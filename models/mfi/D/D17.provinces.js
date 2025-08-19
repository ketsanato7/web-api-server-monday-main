const mongoose = require("mongoose");

const provinces = new mongoose.Schema({
    id: Number,
    value: String,
    province_code: String,
    country_code:String,
    country_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "countries",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("provinces", provinces);