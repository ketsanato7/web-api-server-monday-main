const mongoose = require("mongoose");

const lao_id_cards = new mongoose.Schema({
    id: Number,
    card_no: String,
    card_name: String,
    date_of_issue: String,
    exp_date: String,
    owner_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "personal_info",
    }, ],
        status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("lao_id_cards", lao_id_cards);