const mongoose = require("mongoose");

const borrowers_individual = new mongoose.Schema({
    id: Number,

 
    borrower_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "borrower",
    }, ],
    loan_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "loan",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("borrowers_individual", borrowers_individual);