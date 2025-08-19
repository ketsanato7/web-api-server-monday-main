
const mongoose = require('mongoose');

const LevelAccounting= new mongoose.Schema({
    LevelName:String,
        LevelCode:String,
        LevelStatus:String,
    created_date: {
        type: Date
    },
    updated_date: {
        type: Date
    }  
});
 
module.exports = mongoose.model('LevelAccounting',LevelAccounting);