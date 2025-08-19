const mongoose = require("mongoose");

const employees = new mongoose.Schema({
    id: Number,

     contact_info: String,

    education_level_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "education_level",
    }, ],
    date_of_employment: String,
    field_of_study: String,

    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("employees", employees);