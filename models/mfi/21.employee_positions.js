const mongoose = require("mongoose");

const employee_positions = new mongoose.Schema({
    id: Number,


    employee_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
    }, ],

    position_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "position",
    }, ],
   
    status: String,
    created_date: {
        type: Date,
    },
    updated_date: {
        type: Date,
    },
});

module.exports = mongoose.model("employee_positions", employee_positions);