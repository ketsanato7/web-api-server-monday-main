const mongoose = require("mongoose");

const passports = new mongoose.Schema({
    id: Number,
    passport_no: String,
    passport_name: String,
    exp_date: String,
    owner_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "personal_info",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("passports", passports);