
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    TeacherID:String,
    TeacherTitleID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'TeacherTitle' }],
    TeacherPositionID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'TeacherPosition' }],
    PersonID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('Teacher',Schema);