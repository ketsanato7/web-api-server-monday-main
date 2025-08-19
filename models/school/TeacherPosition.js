
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    TeacherPositionID:String,
    TeacherPositionName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('TeacherPosition',Schema);