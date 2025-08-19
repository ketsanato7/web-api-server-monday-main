
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    LearnerTypeID:String,
    LearnerTypeName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('LearnerType',Schema);