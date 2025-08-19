
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    EductionID:String,
    EductionName:String,
        SystemEductionID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'SystemEduction' }],
    
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('Eduction',Schema);