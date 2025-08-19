const mongoose = require("mongoose");

const deposits = new mongoose.Schema({
    id: Number,
    account_no: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "account_no",
    }, ],
    depositor_type_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "depositor_type",
    }, ],
          from_date: String,
          to_date: String,
          interest_rate_date: String,
          opening_balance: String,
          remaining_balance: String,
          deposit: String,
          withdrawal: String,

          interest_rate: String,

     economic_sector_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "economic_sector",
    }, ],  
      economic_branch_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "economic_branch",
    }, ],
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("deposits", deposits);