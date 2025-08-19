
const mongoose = require('mongoose');

const TranstionType= new mongoose.Schema({
    
    TranstionTypeName:String,
    TranstionTypeCode:String,  
    TranstionTypeStatus:String,
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('TranstionType',AccountingType);