const mongoose = require("mongoose");

const accounting = new mongoose.Schema({
    id: Number,
    account_code: String,
    account_name: String,
        accounting_type_code: String,

    accounting_type_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "accounting_types",
    }, ],
        accounting_group_code: String,

    accounting_group_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "accounting_groups",
    }, ],

        accounting_level_code: String,
      accounting_level_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "accounting_levels",
    }, ],
    status:String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("accountings", accounting);