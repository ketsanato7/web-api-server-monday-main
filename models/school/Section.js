
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    ScetionID:String,
    ScetionName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('Scetion',Schema);