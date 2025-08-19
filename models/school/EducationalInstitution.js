
const { text } = require('express');
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({

    EducationalInstitutionID:String,
    EducationalInstitutionName:String,
    Address:String,
    WhatApp:String,
    Facebook:String,
    Tel:String,
    Fax:String,
    Email:String,
    IssuDate:{type:Date},
    IssuPlace:String, 
    EducationalInstitutionLogo:Object,
    // EducationalInstitutionLogo:{
    //     FieldName:String,
    //     OriginalName:String,
    //     Encoding:String,
    //     MimeType:String,
    //     Buffer:Buffer,
    //     Size:Number
    // },
   VillageID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Village' }],
   SectionID:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }],
   EducationalInstitutionDetailID:[{ type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationalInstitutionDetail' }],

   created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('EducationalInstitution',Schema);