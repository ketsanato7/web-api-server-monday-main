
const mongoose = require('mongoose');

const Accounting= new mongoose.Schema({
    
    ActivityTypeName:String,
    ActivityTypeCode:String,  
    ActivityTypeStatus:String,
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('ActivityType',AccountingType);