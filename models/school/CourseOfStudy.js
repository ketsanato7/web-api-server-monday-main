
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    CourseOfStudyID:String,
    CourseOfStudyName:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('CourseOfStudy',Schema);