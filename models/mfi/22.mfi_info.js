const mongoose = require("mongoose");

const mfi_info = new mongoose.Schema({
    id: Number,
    approved_date: String,
    name_LA: String,
    name_EN: String,
    village_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "village",
    }, ],
    address: String,
    house_unit: String,
    enterprise_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enterprise",
    }, ],
    house_no: String,
    license_no: String,
    branches: Number,
    service_units: Number,
    employees: Number,
    employees_female: Number,
    employees_HQ: Number,
    employees_female_HQ: Number,
    tel: String,
    mobile: String,
    fax: String,
    email: String,
    whatsapp: String,
    website: String,
    other_infos: String,
    latitude: String,
    longitude: String,




    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("mfi_info", mfi_info);