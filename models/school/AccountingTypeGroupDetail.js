
const mongoose = require('mongoose');

const AccountingType= new mongoose.Schema({
    
    AccountingTypeGroupDetailName:String,
    AccountingTypeGroupDetailCode:String,  
    AccountingTypeGroupDetailStatus:String,
      AccountingTypeGroupID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'AccountingTypeGroup' }],
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('AccountingTypeGroupDetail',AccountingType);