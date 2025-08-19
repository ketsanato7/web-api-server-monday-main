
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    BankName:String,
    BankCode:String,
    IIN:String,
    BankStatus:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('Bank',Schema);