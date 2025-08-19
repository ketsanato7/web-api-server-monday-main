
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    FamilyStatusID:String,
    FamilyStatusName:String,
    created_date:{type:Date},
    updated_date:{type:Date}

});
 
module.exports = mongoose.model('FamilyStatus',Schema);