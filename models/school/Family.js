
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    FamilyStatusID:String,
    FamilyStatusName:String,
    LearnerID:[{ type: Schema.Types.ObjectId, ref: 'Learner' }],
    PersonID:[{ type: Schema.Types.ObjectId, ref: 'Person' }],

    created_date:{type:Date},
    updated_date:{type:Date}

});
 
module.exports = mongoose.model('Family',Schema);