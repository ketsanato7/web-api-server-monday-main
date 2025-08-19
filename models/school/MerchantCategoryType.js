
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    MerchantCategoryTypeName:String,
    MerchantCategoryTypeCode:String,
    MerchantCategoryStatus:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('MerchantCategory',Schema);