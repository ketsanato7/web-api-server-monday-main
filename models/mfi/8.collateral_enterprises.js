const mongoose = require("mongoose");

const collateral_enterprises = new mongoose.Schema({
    id: Number,

    enterprise_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "enterprise",
    }, ],
      collateral_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "collateral",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("collateral_enterprises", collateral_enterprises);