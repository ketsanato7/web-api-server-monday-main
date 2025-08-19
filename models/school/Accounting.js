const mongoose = require('mongoose');

const Accounting = new mongoose.Schema({

    AccountingName: String,
    AccountingCode: String,
    AccountingStatus: String,
    AccountingGroupID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountingGroup'
    }],

    LevelAccountingID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LevelAccounting'
    }],
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }
});

module.exports = mongoose.model('Accounting', Accounting);