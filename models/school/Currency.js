
const mongoose = require('mongoose');

const Currency= new mongoose.Schema({
    
    CurrencyName:String,
    CurrencyCode:String,  
    CurrencyStatus:String,
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('Currency',Currency);