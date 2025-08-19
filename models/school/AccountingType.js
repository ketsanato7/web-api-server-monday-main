
const mongoose = require('mongoose');

const AccountingType= new mongoose.Schema({
    
    AccountingTypeName:String,
    AccountingTypeCode:String,  
    AccountingTypeStatus:String,
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('AccountingType',AccountingType);