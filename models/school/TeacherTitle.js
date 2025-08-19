
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    TeacherTitleID:String,
    TeacherTitleName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('TeacherTitle',Schema);