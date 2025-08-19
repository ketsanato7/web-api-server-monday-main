const mongoose = require("mongoose");

const enterprise_info = new mongoose.Schema({
    id: Number,
    name_LA: String,
    name_EN: String,
    register_no: String,
    date_of_issue: String,
        registrant: String,

    enterprise_size_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enterprise_size",
    }, ],
        village_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "village",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("enterprise_info", enterprise_info);