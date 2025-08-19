const mongoose = require("mongoose");

const report_info = new mongoose.Schema({
    mfi_id: String,
    report_date: String,
    account_closing_date: String,
    phone: String,
    email: String,
    whatsapp: String,
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("report_info", report_info);