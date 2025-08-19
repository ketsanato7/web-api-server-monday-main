
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    SystemEductionID:String,
    SystemEductionName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('SystemEduction',Schema);