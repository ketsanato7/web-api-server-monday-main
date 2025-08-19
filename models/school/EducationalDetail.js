
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    EducationalDetailID:String,
    EducationalDetailName:String,
    EductionID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Eduction' }],
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('EducationalDetail',Schema);    