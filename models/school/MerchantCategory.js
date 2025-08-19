
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    MerchantCategoryName:String,
    MerchantCategoryCode:String,
    MerchantCategoryStatus:String,
    MerchantCategoryTypeID:[{  type: mongoose.Schema.Types.ObjectId, ref: 'MerchantCategoryType' }],
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('MerchantCategory',Schema);