
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    LearnerID:String,
    LearnerName:String,
    PersonID:[{ type: mongoose.Schema.Types.ObjectId,ref: 'Person' }],
    LearnerTypeID:[{  type: mongoose.Schema.Types.ObjectId, ref: 'LearnerType' }],

    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('Learner',Schema);