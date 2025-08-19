const Model = require("../../models/mfi/1.personal_info");
const Provice = require("../../models/mfi/D/D17.provinces");
module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
        id: form.id,
        firstname_LA: form.firstname_LA,
        lastname_LA: form.lastname_LA,
        firstname_EN: form.firstname_EN,
        lastname_EN: form.lastname_EN,
        dateofbirth: form.dateofbirth,
        age: form.age,
        gender_id: form.gender_id,
        nationality_id: form.nationality_id,
        marital_status_id: form.marital_status_id,
        career_id: form.career_id,
        province_id: form.province_id,
        district_id: form.district_id,
        village_id: form.village_id,
        home_address: form.home_address,
        contact_info: form.contact_info,
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
                from: "genders",
                localField: "gender_id",
                foreignField: "_id",
                as: "genders"
            }
        },
        {
            $lookup: {
                from: "nationalities",
                localField: "nationality_id",
                foreignField: "_id",
                as: "nationalities"
            }
        },
        {
            $lookup: {
                from: "marital_statuses",
                localField: "marital_status_id",
                foreignField: "_id",
                as: "marital_statuses"
            }
        }, {
            $lookup: {
                from: "careers",
                localField: "career_id",
                foreignField: "_id",
                as: "careers"
            }
        },
        {
            $lookup: {
                from: "villages",
                localField: "village_id",
                foreignField: "_id",
                as: "villages"
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
        firstname_LA: form.firstname_LA,
        lastname_LA: form.lastname_LA,
        firstname_EN: form.firstname_EN,
        lastname_EN: form.lastname_EN,
        dateofbirth: form.dateofbirth,
        age: form.age,
        gender_id: form.gender_id,
        nationality_id: form.nationality_id,
        marital_status_id: form.marital_status_id,
        career_id: form.career_id,
        province_id: form.provice_id,
        district_id: form.district_id,
        village_id: form.village_id,
        home_address: form.home_address,
        contact_info: form.contact_info,
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

module.exports.read_village = async (req, res, next) => {
    const pepline = [{
            $lookup: {
                from: "genders",
                localField: "gender_id",
                foreignField: "_id",
                as: "genders"
            }
        },
        {
            $lookup: {
                from: "nationalities",
                localField: "nationality_id",
                foreignField: "_id",
                as: "nationalities"
            }
        },
        {
            $lookup: {
                from: "marital_statuses",
                localField: "marital_status_id",
                foreignField: "_id",
                as: "marital_statuses"
            }
        }, {
            $lookup: {
                from: "careers",
                localField: "career_id",
                foreignField: "_id",
                as: "careers"
            }
        },
        {
            $lookup: {
                from: "provinces",
                localField: "province_id",
                foreignField: "_id",
                as: "provinces"

            }
        }, {
            $lookup: {
                from: "districts",
                localField: "district_id",
                foreignField: "_id",
                as: "districts"

            }
        },
        {
            $lookup: {
                from: "villages",
                localField: "village_id",
                foreignField: "_id",
                as: "villages"

            }
        },
        {
            $lookup: {
                from: "villages",
                localField: "village_id",
                foreignField: "_id",
                as: "villages"

            }
        }

    ]

    Model.aggregate([pepline]).exec((err, data) => {
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
module.exports.read_village1 = async (req, res, next) => {
   
    Model.findById('6881de205fecff3555f3a6c7').populate("villages").exec((err, data) => {
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