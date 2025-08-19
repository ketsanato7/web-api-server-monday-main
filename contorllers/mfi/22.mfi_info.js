const Model = require("../../models/mfi/22.mfi_info");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
        id: form.id,
        approved_date: form.approved_date,
        name_LA: form.name_LA,
        name_EN: form.name_EN,
        position_id: form.position_id,
        village_id: form.village_id,
        address: form.address,
        house_unit: form.house_unit,
        house_no: form.house_no,
        enterprise_id: form.enterprise_id,
        license_no: form.license_no,
        branches: form.branches,
        service_units: form.service_units,
        employees: form.employees,
        employees_female: form.employees_female,
        employees_HQ: form.employees_HQ,
        employees_female_HQ: form.employees_female_HQ,
        tel: form.tel,
        mobile: form.mobile,
        fax: form.fax,
        email: form.email,
        whatsapp: form.whatsapp,
        website: form.website,
        other_infos: form.other_infos,
        latitude: form.latitude,
        longitude: form.longitude,

        status: form.status,
        created_date: new Date()
    }

    Model.create(data, err => {

        if (!err) {
            console.log("Save");
            res.json({
                status: true,
                message: "Saved"


            })
        } else {
            console.log("error ");
            res.json({
                status: false,
                message: err


            })
        }
    })
}
module.exports.read = async (req, res, next) => {

    Model.find().exec((err, data) => {
        if (!err) {

            res.json({
                status: true,
                message: "select all data ",
                data: data
            })
        } else {


            console.log(err);
            res.json({
                status: false,
                message: err
            })
        }
    });

}
module.exports.read1 = async (req, res, next) => {

    Model.aggregate([{
            $lookup: {
                from: "village",
                localField: "village_id",
                foreignField: "_id",
                as: "village_id"
            }
        },{
            $lookup: {
                from: "enterprise",
                localField: "enterprise_id",
                foreignField: "_id",
                as: "enterprise_id"
            }
        }
    ]).exec((err, data) => {

        if (!err) {

            res.json({
                status: true,
                message: "selete all data ",
                data: data
            })
        } else {


            console.log("error");
            res.json({
                status: false,
                message: err
            })
        }
    });

}

module.exports.update = async (req, res, next) => {
    const form = req.body;
    const data = {
     id: form.id,
        approved_date: form.approved_date,
        name_LA: form.name_LA,
        name_EN: form.name_EN,
        position_id: form.position_id,
        village_id: form.village_id,
        address: form.address,
        house_unit: form.house_unit,
        house_no: form.house_no,
        enterprise_id: form.enterprise_id,
        license_no: form.license_no,
        branches: form.branches,
        service_units: form.service_units,
        employees: form.employees,
        employees_female: form.employees_female,
        employees_HQ: form.employees_HQ,
        employees_female_HQ: form.employees_female_HQ,
        tel: form.tel,
        mobile: form.mobile,
        fax: form.fax,
        email: form.email,
        whatsapp: form.whatsapp,
        website: form.website,
        other_infos: form.other_infos,
        latitude: form.latitude,
        longitude: form.longitude,
        status: form.status,
        updated_date: new Date()

    }
    console.log(form);
    Model.findByIdAndUpdate(form._id, data, {
        useFindAndModify: false
    }).exec((err, data) => {

        if (!err) {

            console.log("Update data complete  ");

            res.json({
                status: true,
                message: "Update data complete",
                data: data

            })

        } else {
            console.log(err);

            res.json({
                status: false,
                message: err
            })


        }
    })



}

module.exports.delete = async (req, res, next) => {

    const form = req.body;


    Model.findByIdAndDelete(form._id, {
        useFindAndModify: false
    }).exec((err) => {

        if (!err) {
            console.log("Delete complete  ");

            res.json({
                status: true,
                message: "Delete complete !",

            })

        } else {
            console.log(error);

            res.json({
                status: false,
                message: err
            })


        }
    })



}