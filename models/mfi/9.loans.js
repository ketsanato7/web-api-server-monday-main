const mongoose = require("mongoose");

const loans = new mongoose.Schema({
    id: Number,
    from_date: String,
    to_date: String,
    use_of_loan: String,
    approved_balance: String,
    classification_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "classification",
    }, ],
    classification_date: String,
    category_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    }, ],
    restructured_date: String,
    write_off_date: String,
    borrower_type_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "borrower_type",
    }, ],
    economic_sector_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "economic_sector",
    }, ],
    economic_branch_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "economic_branch",
    }, ],
    borrower_connection_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "borrower_connection",
    }, ],
    funding_source_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "funding_source",
    }, ],
    funding_org: String,
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("loans", loans);