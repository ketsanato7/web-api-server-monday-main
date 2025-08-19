
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    EmployeeID:String,

    EmployeeType:String,
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('EmployeeTypes',Schema)