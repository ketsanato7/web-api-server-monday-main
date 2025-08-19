const Model = require("../../models/mfi/6.collaterals");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
       id: form.id,
        category_id: form.category_id,
        name: form.name,
        collateral_no: form.collateral_no,
        date_of_issue: form.date_of_issue,
                value: form.value,
        village_id: form.village_id,
        enterprise_size_id: form.enterprise_size_id,
other_detailsL:form.other_detailsL,
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
                from: "personal_info",
                localField: "owner_id",
                foreignField: "_id",
                as: "personal_info"
            }
        },

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
        category_id: form.category_id,
        name: form.name,
        collateral_no: form.collateral_no,
        date_of_issue: form.date_of_issue,
                value: form.value,
        village_id: form.village_id,
        enterprise_size_id: form.enterprise_size_id,
other_detailsL:form.other_detailsL,
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