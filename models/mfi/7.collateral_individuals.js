const mongoose = require("mongoose");

const collateral_individuals = new mongoose.Schema({
    id: Number,

    owner_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "owner",
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

module.exports = mongoose.model("collateral_individuals", collateral_individuals);