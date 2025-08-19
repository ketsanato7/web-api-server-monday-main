const mongoose = require("mongoose");

const personal_info = new mongoose.Schema({
    id: Number,
    firstname_LA: String,
    lastname_LA: String,
    firstname_EN: String,
    lastname_EN: String,
    dateofbirth: String,
    age: Number,
    gender_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "genders",
    }, ],
    nationality_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "nationality",
    }, ],
    marital_status_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "marital_status",
    }, ],
    career_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "  careers",
    }, ],
    province_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
    }, ],
    district_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "districts",
    }, ],

    village_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "villages",
    }, ],
    home_address: String,
    contact_info: String,
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});


module.exports = mongoose.model("personal_info", personal_info);