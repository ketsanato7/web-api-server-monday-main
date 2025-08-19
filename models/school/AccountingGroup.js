const mongoose = require('mongoose');

const AccountingGroup = new mongoose.Schema({

    AccountingGroupName: String,
    AccountingGroupCode: String,
    AccountingGroupStatus: String,
    AccountingTypeID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountingType'
    }],
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }
});

module.exports = mongoose.model('AccountingGroup', AccountingGroup);