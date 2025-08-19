
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    EducationalInstitutionDetailID:String,
    EducationalInstitutionDetailName:String,
   EducationalInstitutionTypeID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'EducationalInstitutionType' }],
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('EducationalInstitutionDetail',Schema);