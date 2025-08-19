const mongoose = require('mongoose');


const Activity= new mongoose.Schema({

    ActivityDetail:{
        type:String
    },
    Amount:{
        type:mongoose.Decimal128
    },  
    AccountingID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accounting'
    }],
    UserID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tb_users1'
    }],
    ActivityState:{
        type:String
    },
    ActivityDate:{
        type:Date
    },
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('Activity',Activity);