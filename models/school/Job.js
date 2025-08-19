
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    JobID:String,
    JobName:String,
    created_date:{type:Date},
    updated_date:{type:Date},
    JobStatus:Boolean
});
module.exports = mongoose.model('Job',Schema);