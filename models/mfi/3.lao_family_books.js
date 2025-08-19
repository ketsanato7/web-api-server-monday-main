const mongoose = require("mongoose");

const lao_family_books = new mongoose.Schema({
    id: Number,
    book_no: String,
    book_name: String,
    date_of_issue: String,
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

module.exports = mongoose.model("lao_family_books", lao_family_books);